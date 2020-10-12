import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <ProtectedRoute exact path='/' component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default Routes
