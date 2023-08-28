
import './App.css'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='about-us' element={<About />}>
          <Route path="nav" element={<Home />} />
        </Route>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
