import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Worm from '/src/components/worm.jsx';


function Game(props) {
  const [color, setColor] = useState(props.color);
  const rt = useLocation();
  const game_id = rt.pathname.split('/');
  console.log('GAME', game_id[game_id.length - 1]);
  return (
      <Worm
          length={3}
          x={500}
          y={700}
          color={color}
          changeColor={setColor} />
  )
}

export default Game