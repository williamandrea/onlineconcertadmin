import React, { memo, useEffect, useState, useCallback } from 'react'
import { Table, Button, Spinner } from 'reactstrap'
import useModal from '../utils/useModal'
import CustomModal from '../components/CustomModal'
import Firestore from '../config/firestore'
import moment from 'moment'
import id from 'moment/locale/id'

moment.locale('id', id)

const action = ['Delete']

const CustomTable = memo((props) => {
  const [showModal, toggleShowModal] = useModal(false)

  const handleDelete = (id) => {
    Firestore.deleteEvent(id).then((res) => {
      console.log(res)
    })
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
    props.tableData ?
      props.tableData.map((item, key) => (
        <tr key={key} onClick={toggleShowModal}>
          <td>{item.id || '-'}</td>
          <td>{item.nama || '-'}</td>
          <td>{moment(item.tanggalMulai?.seconds).format('LLLL') || ''}</td>
          <td>{moment(item.tanggalAkhir?.seconds).format('LLLL') || ''}</td>
          <td>
            <Button onClick={() => handleDelete(item.id)} className='button-action' key={key} color='danger'>Delete</Button>
          </td>
        </tr >
      )) : <p>No Data</p>
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
