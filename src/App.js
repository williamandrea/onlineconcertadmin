import React from 'react'
import Routes from './router/Routes'
import { initialState, StateProvider, reducer } from './utils/Context'

const App = () => {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Routes />
      </StateProvider>
    </>
  )
}

export default App