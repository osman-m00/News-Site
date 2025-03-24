import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidenews from './components/Sidenews'
import Scrollnews from './components/Scrollnews'
import './App.css'

function App() {

  return (
    <>
    
    <Header/>
    <div className='flex  mt-40 ml-10'>
    <Main/>
    <Sidenews/>
    </div>
    <Scrollnews />
    </>
  )
}

export default App
