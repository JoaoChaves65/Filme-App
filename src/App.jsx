import { Outlet } from 'react-router-dom'

import { Navbar } from './components/Navbar'

import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <h2>Data Movies</h2>
      <Outlet />
    </div>
  )
}

