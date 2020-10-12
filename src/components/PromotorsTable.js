import React, { memo, useEffect, useState, useCallback } from 'react'
import { Table, Button, Spinner } from 'reactstrap'
import useModal from '../utils/useModal'
import CustomModal from '../components/CustomModal'
import Firestore from '../config/firestore'

const CustomTable = memo((props) => {
  const [showModal, toggleShowModal] = useModal(false)
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(props.body)
  }, [props.body])

  const handlePromotorVerified = useCallback((item) => {
    Firestore.setPromotorVerified(item.id, { verified: !item.verified })
  }, [])

  const renderTableHeader = (
    <tr>
      {
        props.header.map((item, key) => (
          <th key={key}>{item}</th>
        ))
      }
    </tr>
  )

  const renderTableBody = (
    props.tableData.map((item, key) => (
      <tr key={key} onClick={toggleShowModal}>
        <td>{item.id}</td>
        <td style={{ fontWeight: 'bold', color: item.verified ? 'green' : 'yellow' }}>{item.verified ? 'Accepted' : 'Pending'}</td>
        <td onClick={() => handlePromotorVerified(item)}>
          <Button className='button-action' key={key} color={item.verified ? 'danger' : 'success'}>
            {item.verified ? 'Cancel Accept' : 'Accept'}
          </Button>
        </td>
      </tr >
    ))
  )

  return (
    <>
      <Table className='table'>
        <thead>
          {renderTableHeader}
        </thead>
        <tbody>
          {renderTableBody}
        </tbody>
      </Table>
      {/* <CustomModal modal={showModal} toggleModal={toggleShowModal} /> */}
    </>

  )
})

export default CustomTable
