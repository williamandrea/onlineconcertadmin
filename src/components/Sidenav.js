import React from 'react'
import { useContextValue } from '../utils/Context'

const menu = ['Users', 'Promotors', 'Events', 'Categories', 'Tickets']

const Sidenav = () => {
  const [{ dashboardState }, dispatch] = useContextValue()

  const handleClick = (item) => {
    dispatch({ type: 'SET_DASHBOARDSTATE', payload: item })
  }

  const renderMenu = (
    <ul className='listgroup'>
      {
        menu.map((item, key) => (
          <li className='listgroupitem' onClick={() => handleClick(item)} key={key} style={dashboardState === item ? { background: '#61DAFB' } : null}>
            {item}
          </li>
        ))
      }
    </ul>
  )

  return (
    <div className='sidenav'>
      <img src="/logo512.png" alt="logo" />
      <p>Online Concert</p>
      {renderMenu}
    </div>
  )
}

export default Sidenav
