
import {Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home'

import Landing from './Pages/Landing'
import History from './Pages/History'
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route element={<Landing/>} path='/' />
        <Route element={<Home/>} path='/home' />
        <Route element={<History/>} path='/history' />

      </Routes>
    <Footer/>
    </>
   
  )
}

export default App
