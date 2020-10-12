import React from 'react'
import { Navbar, NavbarBrand, NavbarText, Button } from 'reactstrap'

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <Navbar className='navbar' light expand="md">
      <NavbarBrand className='brand' href="/">
        <p>Online Concert Admin</p>
      </NavbarBrand>
    </Navbar>
  )
}

export default Header
