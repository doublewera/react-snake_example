import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Selem from './selem'

function ktoeto(ia) {
    console.log(ia);
}

function Worm(props) {
    const [myparts, setParts] = useState([{
        x: props.x,
        y: props.y,
        // todo: get the center of the screen
    }])
    const [mycolor, setMyColor] = useState(props.color)
    const moveUp = () => {
        let newParts = [{
            x: myparts[0].x,
            y: myparts[0].y - props.size
        }];
        for (let i = 1; i < myparts.length; i++) {
            newParts.push({
                x: myparts[i-1].x,
                y: myparts[i-1].y,
            });
        }
        setParts(newParts);
    }
    useEffect( () => {
        const tid = setTimeout(() => {
            moveUp();
        },  1300);
        return () => {
            clearTimeout(tid)
        };
    });
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
                      x: i * props.size + myparts[0].x,
                      y: 0 + myparts[0].y
                  });
              }
              setParts(me);
          });
    }
    const colors = [
        "red",
        "blue",
        "#8B8000",
        "green",
        "purple",
        "orange",
        "cyan"
    ];
    let result = [];
    for (let i = 0; i < myparts.length; i++) {
        result.push(<Link to={`/${i}`}>Mew<Selem
            newColor={setMyColor}
            meniaNajali={ktoeto}
            color={mycolor}
            key={"i" + i}
            style={{
                width: props.size + "px",
                height: props.size + "px",
                x: myparts[i].x + "px",
                y: myparts[i].y + "px",
                backgroundColor: colors[i],
            }}
            /></Link>)
    }
    console.log('now mylength is ', myparts.length);
    if (myparts.length != 5) {
        getFromDb();
    }
    return result 
}

export default Worm;