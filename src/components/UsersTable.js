import React, { memo } from 'react'
import { Table, Button, Spinner } from 'reactstrap'
import useModal from '../utils/useModal'
import CustomModal from '../components/CustomModal'
import Firestore from '../config/firestore'

// const body = ['171110622', 'William Andrea', 'william4ndrea@gmail.com', 'true']

const action = ['Edit', 'Delete']

const CustomTable = memo((props) => {
  const [showModal, toggleShowModal] = useModal(false)

  const handleVerify = (item) => {
    console.log(item)
    Firestore.setVerifyUser(item.id, { verified: true })
  }

  const handleDelete = (item) => {
    console.log(item)
    Firestore.deleteUser(item.id)
  }

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
      <tr key={key} onClick={toggleShowModal} defaultValue={key} >
        <td>{item.uid}</td>
        <td>{item.nama || '-'}</td>
        <td>{item.email || '-'}</td>
        <td style={{ fontWeight: 'bold', color: item.verified ? 'green' : 'yellow' }}>{item.verified ? 'Done' : 'Pending'}</td>
        <td>
          <Button disabled={item.verified} onClick={() => handleVerify(item)} className='button-action' color='success' style={{ marginRight: '5px' }}>Verify</Button>
          <Button onClick={() => handleDelete(item)} className='button-action' color='danger'>Delete</Button>
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
