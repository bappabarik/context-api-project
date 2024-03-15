import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div style={{'display': 'flex', 'flex-direction': 'column', 'text-align': 'center', 'width': '100%' }}>
      <h1>React with chai</h1>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
