import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Contato from './components/pages/Contato'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <div>

      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/sobre" element={ <Sobre />}></Route>
          <Route path="/#" element={ <Home />}></Route>
          <Route path="/contato" element={ <Contato />}></Route>
          <Route path="/login" element={ <Login />}></Route>
          <Route path="/cadastro" element={ <Cadastro />}></Route>
          <Route path="/" element={ <Home />}></Route>
          </Routes>
      </Container>
      <Footer />
      

    </div>

  )
 
}

export default App
