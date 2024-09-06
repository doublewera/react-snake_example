import { useState } from 'react'
import { useParams } from 'react-router'
import Worm from '/src/components/worm.jsx'


function Game(props) {
  const [color, setColor] = useState(props.color);
  const params = useParams()
  console.log("My Params: ", params.size)
  return (
      <Worm
          length={props.length}
          x={500}
          y={700}
          size={params.size}
          color={color}
          changeColor={setColor} />
  )
}

export default Game