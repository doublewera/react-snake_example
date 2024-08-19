import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Worm from './components/worm.jsx';


function App(props) {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(props.color)

  return (
    <>
      <Worm color={color} changeColor={setColor} />
    </>
  )
}

export default App
