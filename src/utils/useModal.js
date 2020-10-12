import { useState } from 'react'

const useModal = (initialState) => {
  const [showModal, setShowModal] = useState(initialState)

  const toggleShowModal = () => {
    setShowModal(!showModal)
  }

  return [showModal, toggleShowModal]
}

export default useModal