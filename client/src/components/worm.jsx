import { useState, useEffect } from 'react';
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
            y: myparts[0].y - 128
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
                  question: "How mutch watch?"
              }),
              /* headers: {
                  'X-CSRFToken': 'mew'//document.querySelector(
                      //'[name=csrfmiddlewaretoken]').value
              }*/
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
                      x: i * 128 + myparts[0].x,
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
        result.push(<Selem
            newColor={setMyColor}
            meniaNajali={ktoeto}
            color={mycolor}
            key={"i" + i}
            style={{
                width: "128px",
                height: "128px",
                x: myparts[i].x + "px",
                y: myparts[i].y + "px",
                backgroundColor: colors[i],
            }}
            />)
    }
    console.log('now mylength is ', myparts.length);
    if (myparts.length != 5) {
        getFromDb();
    }
    return result 
}

export default Worm;