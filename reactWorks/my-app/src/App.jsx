import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Season from './components/Season'
import Example01 from './components/Example01'
import Example02 from './components/Example02'
import Test01 from './components/Test01'
import Header from './practice/Header'
import Example03 from './components/Example03'

function MyButton(){
  return (
    <div>
      <p>버튼컴포넌트</p>
      <button>목록보기</button>
    </div>
  )
}

function App() {
  //const [count, setCount] = useState(0)
  

  return (
      <div>
        <section id="center">
          {/* <h2>리엑트 시작하기</h2>
          <Season /> */}
          {/* <Example01/> */}
          {/* <Example02 /> */}
          {/* <Test01 /> */}
          {/* <Header /> */}
          <Example03 />
        </section>

        <section>
          {/* <h2> jsx 문법 배우기\</h2>
          <MyButton /> */}
        </section>
      </div>

  )
}

export default App
