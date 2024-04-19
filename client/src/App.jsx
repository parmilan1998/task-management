import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import HomeScreen from './pages/HomeScreen'
import AddTaskScreen from './pages/AddTaskScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/addtask' element={<AddTaskScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
