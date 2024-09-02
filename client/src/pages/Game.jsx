import { useState } from 'react'
import Worm from '/src/components/worm.jsx';


function Game(props) {
  const [color, setColor] = useState(props.color)

  return (
    <>
      <Worm length={3} x={500} y={700} color={color} changeColor={setColor} />
    </>
  )
}

export default Game