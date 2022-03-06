import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  )
}

export default App
