import React from 'react'
import Sidenav from '../components/Sidenav'
import ManageUser from '../pages/ManageUser'
import ManagePromotor from '../pages/ManagePromotor'
import ManageEvents from '../pages/ManageEvents'
import ManageCategories from '../pages/ManageCategories'
import ManageTickets from '../pages/ManageTickets'
import { useContextValue } from '../utils/Context'

const Dashboard = () => {
  const [{ dashboardState }] = useContextValue()

  const renderContent = () => {
    switch (dashboardState) {
      case 'Users':
        return <ManageUser />
      case 'Promotors':
        return <ManagePromotor />
      case 'Events':
        return <ManageEvents />
      case 'Categories':
        return <ManageCategories />
      case 'Tickets':
        return <ManageTickets />
      default:
        break
    }
  }

  return (
    <div className='dashboard'>
      <Sidenav />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  )
}

export default Dashboard
