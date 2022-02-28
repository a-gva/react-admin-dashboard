import { useState } from 'react'
import './App.css'
import Topbar from './components/topbar/Topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Topbar />
      <h1>Hello</h1>
    </div>
  )
}

export default App
