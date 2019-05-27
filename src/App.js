import React from 'react'

import './reset.css'
import './styles.scss'

import Header from './components/Header'
import Title from './components/Title'
import Casting from './components/Casting'
import Recommended from './components/Recommended'
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Header/>
      <Title />
      <Casting />
      <Recommended />
      <Footer />
    </div>
  )
}

export default App
