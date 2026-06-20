import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FetchTodos from './compnents/FetchTodos'
import FetTodoById from './compnents/FetchTodoById'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
      <section className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FetchTodos />} />
            <Route path='/:id' element={<FetTodoById />} />
          </Routes>
        </BrowserRouter>
      </section>
  )
}

export default App
