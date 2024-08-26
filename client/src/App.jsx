import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Worm from './components/worm.jsx';


function App(props) {
  const [color, setColor] = useState(props.color)

  return (
    <>
      <Worm length={3} color={color} changeColor={setColor} />
    </>
  )
}

export default App
