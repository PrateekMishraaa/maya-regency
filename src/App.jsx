import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import BoonNow from './Pages/BoonNow'
import Gallery from './Pages/Gallery'
import Attractions from './Pages/Attractions'
import Rooms from './Pages/Rooms'
import Payment from './Pages/Payment.jsx'
import Contact from './Pages/Contact.jsx'
const App = () => {
  return (
<>

<Router>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/book-now' element={<BoonNow/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/attractions' element={<Attractions/>}/>
    <Route path='/rooms' element={<Rooms/>}/>

  </Routes>
</Router>
</>
  )
}

export default App
