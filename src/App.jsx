import './App.css'

import { Home }  from './pages/Home'
import { Ejercicio } from './pages/Ejercicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio/:id" element={<Ejercicio/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
