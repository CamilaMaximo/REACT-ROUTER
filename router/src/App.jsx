
import { Outlet } from 'react-router-dom'
// link entre páginas- repete SPAs
import Navbar from './components/Navbar';

import './App.css'

function App() {


  return (
    
    <div className='App'>
      <Navbar/>
      <Outlet/>
      <p>Footer</p>
   
    </div>
  )
}

export default App
