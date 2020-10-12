import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import CustomTable from '../components/TicketsTable'
import Firestore from '../config/firestore'
import useSearch from '../utils/useSearch'
import Searchbar from '../components/Searchbar'

const header = ['ID Tiket', 'ID Acara', 'ID User', 'Status', 'Actions']

const ManageTickets = () => {
  const [text, bindText, search, handleSearch, list, setList, filteredData] = useSearch(['id', 'idAcara', 'idUser'])
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    Firestore.getTickets().then((res) => {
      setList(res)
      setTableData(res)
    })
  }, [])

  return (
    <Container className='dashboard-container'>
      <h2>Manage Tickets</h2>
      <Searchbar bindText={bindText} handleSearch={handleSearch} />
      <CustomTable header={header} tableData={filteredData} />

    </Container>
  )
}

export default ManageTickets
