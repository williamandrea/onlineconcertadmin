import React, { memo, useState } from 'react'
import { Table, Button, Spinner } from 'reactstrap'
import useModal from '../utils/useModal'
import CustomModal from '../components/CustomModal'
import Firestore from '../config/firestore'

// const body = ['171110622', 'William Andrea', 'william4ndrea@gmail.com', 'true']

const action = ['Verify', 'Delete']

const CustomTable = memo((props) => {
  const [showModal, toggleShowModal] = useModal(false)
  const [modalData, setModalData] = useState({})

  const handleVerify = (item) => {
    console.log(item)
    Firestore.setVerifyTicket(item.id, { verified: 'success' })
  }

  const handleDecline = (item) => {
    console.log(item)
    Firestore.setVerifyTicket(item.id, { verified: 'declined' })
  }

  const handleShowModal = (id) => {
    const temp = props.tableData.filter((item) => (
      item.id === id
    ))
    setModalData(temp)
    toggleShowModal()
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
      <tr key={key}>
        <td onClick={() => handleShowModal(item.id)}>{item.id}</td>
        <td onClick={() => handleShowModal(item.id)}>{item.idAcara || '-'}</td>
        <td onClick={() => handleShowModal(item.id)}>{item.idUser || '-'}</td>
        <td onClick={() => handleShowModal(item.id)} style={{ fontWeight: 'bold', color: item.verified === 'success' ? 'green' : item.verified === 'pending' ? 'orange' : 'red' }}>{item.verified}</td>
        <td>
          <Button disabled={item.verified === 'success'} onClick={() => handleVerify(item)} className='button-action' color='success' style={{ marginRight: '5px' }}>Verify</Button>
          <Button disabled={item.verified === 'success'} onClick={() => handleDecline(item)} className='button-action' color='danger'>Decline</Button>
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
      <CustomModal modal={showModal} toggleModal={toggleShowModal} data={modalData} />
    </>

  )
})

export default CustomTable
