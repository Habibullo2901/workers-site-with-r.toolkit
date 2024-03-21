import './App.css'
import { Routes, Route } from 'react-router-dom'
import Addworker from './routes/Addworker'
import Workers from './routes/Workers'
import Navbar from './Navbar'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/add' element={<Addworker />} />
        <Route path='/' element={<Workers />} />
      </Routes>
    </>
  )
}

export default App
