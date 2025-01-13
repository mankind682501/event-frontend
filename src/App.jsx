
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './pages/Header'
import Footer from './pages/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Nightlyf from './components/Nightlyf'
import Partyview from './components/Partyview'
import Mainpage from './pages/Mainpage'
import Business from './components/Business'
import Dating from './components/Dating'


import Fooddrink from './components/Fooddrink'
import Hobbies from './components/Hobbies'
import Holidays from './components/Holidays'
import Music from './components/Music'

import Performvisual from './components/Performvisual'
import Listevent from './components/Listevent'
import Pagenotfound from './pages/Pagenotfound'
import Profile from './components/Profile'
import Createevent from './components/Createevent'
import AllEvents from './pages/AllEvents'
import ViewEvent from './pages/ViewEvent'
import ALLedit from './components/ALLedit'
import Booking from './components/Booking'

function App() {
  

  return (
    <>
     <Header/>
    <Routes>
      <Route path='/register' element={<Landing register/>}/>
      <Route path='/login' element={<Landing/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/pagenotfound'element={<Pagenotfound/>}/>
      <Route path='/create' element={<Createevent/>}/>
      
      <Route path='/party' element={<Partyview/>}/>
      <Route path='/mainpage' element={<Mainpage/>}/>


      <Route path='/nightlyf' element={<Nightlyf/>}/>
      <Route path='/business' element={<Business/>}/>
      <Route path='/dating' element={<Dating/>}/>
      <Route path='/fooddrink' element={<Fooddrink/>}/>
      <Route path='/hobbies' element={<Hobbies/>}/>
      <Route path='/holidays' element={<Holidays/>}/>
      <Route path='/music' element={<Music/>}/>
      <Route path='/perform' element={<Performvisual/>}/>
      <Route path='/listevent' element={<Listevent/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/allevent' element={<AllEvents/>}/>
      <Route path="/view/:id" element={<ViewEvent/>}/>
      <Route path='/book/:id' element={<Booking/>}/>
      <Route path='/edit' element={<ALLedit/>}/>

      
    </Routes>
    <Footer/>
  
      
    </>
  )
}

export default App
