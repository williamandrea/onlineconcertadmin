import React, { createContext, useContext, useReducer } from 'react'

export const initialState = {
  dashboardState: 'Users'
}

export const actionTypes = {
  SET_DASHBOARDSTATE: 'SET_DASHBOARDSTATE',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_DASHBOARDSTATE:
      return {
        ...state,
        dashboardState: action.payload
      }
    default:
      return state
  }
}

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useContextValue = () => useContext(StateContext)