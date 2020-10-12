import React from 'react'
import { Button, Container, Form, Input } from 'reactstrap'

const Login = () => {
  return (
    <Container className='login'>
      <Form className='form shadow p-3 mb-5 bg-white rounded'>
        <h2>Login</h2>
        <Input className='input' type='text' placeholder='Username' />
        <Input className='input' type='password' placeholder='Password' />
        <Button block color='info'>Login</Button>
      </Form>
    </Container>
  )
}

export default Login
