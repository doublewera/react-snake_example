import { useReducer, useEffect } from 'react'
import { useParams } from 'react-router'
import Worm from '/src/components/worm.jsx'

const initialSnakeState = [
  {
    y: window.screen.availHeight / 2,
    x: window.screen.availWidth / 2
  }
]

const initialSpeed = {
  dy: -1,  // snake moves up; +1 moves down
  dx:  0   // -1 moves left, +1 moves right
}

function speedReducer(acr, action) {
  switch (action.direction) {
    case 'up': {
      return {      
        dy: -1,  // snake moves up; +1 moves down
        dx:  0   // -1 moves left, +1 moves right
      }
    }
    case 'down': {
      return {      
        dy: +1,  // snake moves up; +1 moves down
        dx:  0   // -1 moves left, +1 moves right
      }
    }
    case 'left': {
      return {      
        dy:  0,  // snake moves up; +1 moves down
        dx: -1   // -1 moves left, +1 moves right
      }
    }
    case 'right': {
      return {      
        dy:  0,  // snake moves up; +1 moves down
        dx: +1   // -1 moves left, +1 moves right
      }
    }
  }
}

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
    return action.st;
    //return [...parts,action.st];
//    return [...parts,];
//    return parts.map((p) => {return ([{x: p.x, y: p.y}])});
    //return parts.map((t) => {
      //if (t.id === action.task.id) {
      //  return action.task;
      //} else {
    //    return t;
      //}
    //});
  }/* else if (action.type === 'deleted') {
    return tasks.filter((t) => t.id !== action.id);
  }*/ else {
    throw Error('Unknown action: ' + action.type);
  }
}



function Game(props) {
  const [myparts, dispatch] = useReducer(snakeReducer, initialSnakeState)
  const [myspeed, accelerate] = useReducer(speedReducer, initialSpeed)
  useEffect(() => {
    window.addEventListener('keypress', e => {
      switch(e.key) {
        case 'w': accelerate({direction: 'up'}); break;
        case 'a': accelerate({direction: 'left'}); break;
        case 's': accelerate({direction: 'down'}); break;
        case 'd': accelerate({direction: 'right'}); break;
      }
      console.log(e.key)
    })
  }, [])
  const params = useParams()
  console.log("My Params: ", params.size)
  return (
    <Worm
      length={props.length}
      positions={myparts}
      speed={myspeed}
      upd={dispatch}
      size={params.size}
    />
  )
}

export default Game