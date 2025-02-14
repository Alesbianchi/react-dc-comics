import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// importo header
import Header from "./components/Header.jsx";



// importo main
import Main from "./components/Main.jsx";

// importo footer
import Footer from "./components/Footer.jsx";

import './App.css'

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
