import { useEffect } from 'react'
import { Link } from "react-router-dom"
import Selem from './selem'

function ktoeto(ia) {
    console.log(ia);
}

function Worm(props) { // == TaskList
    const myparts = props.positions
    const myspeed = props.speed
    const move = () => {
        let newParts = [{
            x: myparts[0].x + myspeed.dx * props.size,
            y: myparts[0].y + myspeed.dy * props.size
        }];
        for (let i = 1; i < myparts.length; i++) {
            newParts.push({
                x: myparts[i-1].x,
                y: myparts[i-1].y,
            });
        }
        props.upd({
            type: 'moved',
            st: newParts})
    }
    useEffect( () => {
        const tid = setTimeout(() => {
            move();
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
              props.upd({
                type: 'moved',
                st: me})
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
            meniaNajali={ktoeto}
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
    if (myparts.length != 5) {
        getFromDb();
    }
    return result 
}

export default Worm;