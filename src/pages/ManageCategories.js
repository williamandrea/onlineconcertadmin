import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import CustomTable from '../components/CategoriesTable'
import Searchbar from '../components/Searchbar'
import Firestore from '../config/firestore'
import useSearch from '../utils/useSearch'

const header = ['ID', 'Nama Kategori', 'Actions']

const ManageCategories = () => {
  const [text, bindText, search, handleSearch, list, setList, filteredData] = useSearch(['id', 'nama'])
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    Firestore.getCategories().then((res) => {
      setList(res)
      setTableData(res)
    })
  }, [])

  return (
    <Container className='dashboard-container'>
      <h2>Manage Categories</h2>
      <Searchbar bindText={bindText} handleSearch={handleSearch} />
      <CustomTable header={header} tableData={filteredData} />

    </Container>
  )
}

export default ManageCategories
