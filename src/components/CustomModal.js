import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, Image } from 'reactstrap'

const CustomModal = (props) => {
  return (
    <Modal isOpen={props.modal}
      toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>Detail Tiket</ModalHeader>
      <ModalBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src={props.data[0]?.buktiPembayaran} style={{ width: '300px', marginBottom: '10px' }} alt='Bukti Pembayaran' />
        <div style={{ width: '300px' }}>
          <p style={{ fontWeight: 'bold', margin: 0 }}>ID Acara:</p>
          <p>{props.data[0]?.idAcara}</p>
          <p style={{ fontWeight: 'bold', margin: 0 }}>Total: </p>
          <p>{props.data[0]?.total}</p>
          <p style={{ fontWeight: 'bold', margin: 0 }}>Status:</p>
          <p>{props.data[0]?.verified}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" block onClick={props.toggleModal}>Selesai</Button>
      </ModalFooter>
    </Modal>
  )
}

export default CustomModal
