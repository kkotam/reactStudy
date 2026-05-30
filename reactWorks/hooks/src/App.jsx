import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './compnents/Counter'
import Car from './compnents/Car'
import Drinks2 from './compnents/Drinks2'

function App() {
//npm start

  return (
    <>
      <section className='app'>
        <h2>상태관리 실습</h2>
        <Drinks2 />
        
      </section>
    </>
  )
}

export default App
