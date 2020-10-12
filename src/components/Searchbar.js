import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap'

const Searchbar = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.handleSearch()
    }
  }
  return (
    < InputGroup className='input-group' >
      <Input {...props.bindText} onKeyDown={handleKeyDown} className='input' type='text' placeholder='Search' />
      <Button onClick={props.handleSearch} color='primary'>Search</Button>
    </InputGroup >
  )
}

export default Searchbar
