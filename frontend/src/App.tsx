import { useState } from 'react'
import './App.scss'
import { Button } from 'react-bootstrap'
import Header from './components/Header'
import HomePage from './Pages/HomePage/HomePage';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Header/>
    <HomePage/>
     <Footer/>
    </>
  )
}

export default App
