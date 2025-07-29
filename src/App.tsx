
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './nav/Navbar'


function App() {


  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
