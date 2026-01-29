import './App.css'

import Home  from './pages/Home'
import { EjercicioDetalle } from './pages/Ejercicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio/:id" element={<EjercicioDetalle/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
