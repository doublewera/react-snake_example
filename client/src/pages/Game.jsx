import { useState } from 'react'
import { useParams } from 'react-router'
import Worm from '/src/components/worm.jsx'

const initialSnakeState = [{
  y: window.screen.availHeight / 2,
  x: window.screen.availWidth / 2
}]

function snakeReducer(parts, action) {
  /*if (action.type === 'added') {
    return [
      ...parts,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else */ if (action.type === 'moved') {
    return parts.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  }/* else if (action.type === 'deleted') {
    return tasks.filter((t) => t.id !== action.id);
  }*/ else {
    throw Error('Unknown action: ' + action.type);
  }
}



function Game(props) {
  const params = useParams()
  console.log("My Params: ", params.size)
  return (
    <Worm
      length={props.length}
      positions={initialSnakeState}
      size={params.size}
    />
  )
}

export default Game