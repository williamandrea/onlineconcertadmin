import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import CustomTable from '../components/PromotorsTable'
import CustomModal from '../components/CustomModal'
import Searchbar from '../components/Searchbar'
import useSearch from '../utils/useSearch'
import useModal from '../utils/useModal'
import Firestore from '../config/firestore'

const header = ['ID', 'Status', 'Actions']

const ManageUser = () => {
  const [text, bindText, search, handleSearch, list, setList, filteredData] = useSearch(['id'])
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    Firestore.getPromotors().then((res) => {
      setList(res)
      setTableData(res)
    })
  }, [])

  return (
    <Container className='dashboard-container'>
      <h2>Manage Promotors</h2>
      <Searchbar bindText={bindText} handleSearch={handleSearch} />
      <CustomTable header={header} tableData={filteredData} />
    </Container>
  )
}

export default ManageUser
