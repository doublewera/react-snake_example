import { useReducer, useEffect } from 'react'
import { useParams } from 'react-router'
import Worm from '/src/components/worm.jsx'

const initialSnakeState = [
  {
    i: 10,
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
  if (action.type === 'moved') {
    if(parts[0].i != 10) {
       localStorage.setItem('snakeParts', JSON.stringify(action.st))
    }
    return action.st
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}



function Game(props) {
  const my_old_parts = JSON.parse(localStorage.getItem('snakeParts'))
  console.log(my_old_parts)
  const [myparts, setSnakeParts] = useReducer(
    snakeReducer,
    my_old_parts ? my_old_parts : initialSnakeState)
  const [myspeed, accelerate] = useReducer(speedReducer, initialSpeed)
  const params = useParams()
  const move = () => {
    let newParts = [{
        x: myparts[0].x + myspeed.dx * params.size,
        y: myparts[0].y + myspeed.dy * params.size
    }];
    for (let i = 1; i < myparts.length; i++) {
        newParts.push({
            x: myparts[i-1].x,
            y: myparts[i-1].y,
        });
    }
    setSnakeParts({
        type: 'moved',
        st: newParts})
  }
  useEffect( () => {
    const tid = setTimeout(() => {
        move();
    },  1300);
    return () => {
        clearTimeout(tid)
    }
  })
  const getFromDb = () => {
    fetch(
        "http://127.0.0.1:3001/",
        {
          method: "post",
          body: JSON.stringify({
              question: "How much watch?"
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        }
      ).then((data) => {
        if (true) {  //data.status == 200)
            console.log('RESPONSE!');
            return data.json();  // Мы просто знаем...
            // А надо БРАТЬ тип данных!!!
        }
      }).then((datajson) => {
          let me = [];
          for (let i = 0; i < datajson['length']; i++) {
              me.push({
                  x: i * params.size + myparts[0].x,
                  y: 0 + myparts[0].y
              });
          }
          setSnakeParts({
            type: 'moved',
            st: me})
      })
  }

  if (myparts.length != 5) {
    getFromDb();
  }
  useEffect(() => {
    window.addEventListener('keypress', e => {
      switch(e.key) {
        case 'w': case 'k': accelerate({direction: 'up'   }); break
        case 'a': case 'h': accelerate({direction: 'left' }); break
        case 's': case 'j': accelerate({direction: 'down' }); break
        case 'd': case 'l': accelerate({direction: 'right'}); break
      }
      console.log(e.key)
    })
  }, [])
  return (
    <Worm
      length={props.length}
      positions={myparts}
      speed={myspeed}
      size={params.size}
    />
  )
}

export default Game