import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import BoonNow from './Pages/BoonNow'
import Gallery from './Pages/Gallery'
const App = () => {
  return (
<>

<Router>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/book-now' element={<BoonNow/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
  </Routes>
</Router>
</>
  )
}

export default App
