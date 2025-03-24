import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidenews from './components/Sidenews'
import './App.css'

function App() {

  return (
    <>
    
    <Header/>
    <div className='flex  mt-40 ml-10'>
    <Main/>
    <Sidenews/>
    </div>
    </>
  )
}

export default App
