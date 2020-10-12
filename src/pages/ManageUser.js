import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import Searchbar from '../components/Searchbar'
import CustomTable from '../components/UsersTable'
import Firestore from '../config/firestore'
import useSearch from '../utils/useSearch'

const header = ['ID', 'Nama', 'Email', 'Verified', 'Action']

const ManageUser = () => {
  const [text, bindText, search, handleSearch, list, setList, filteredData] = useSearch(['nama', 'uid', 'email'])
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    Firestore.getUsers().then((res) => {
      setList(res)
      setTableData(res)
    })
  }, [])

  return (
    <Container className='dashboard-container'>
      <h2>Manage Users</h2>
      <Searchbar bindText={bindText} handleSearch={handleSearch} />
      <CustomTable header={header} tableData={filteredData} />
    </Container>
  )
}

export default ManageUser
