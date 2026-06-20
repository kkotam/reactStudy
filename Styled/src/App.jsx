import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ButtonSample from './component/ButtonSample'
import MainPage from './component/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="app">
        <MainPage />
      </section>

    </>
  )
}

export default App
