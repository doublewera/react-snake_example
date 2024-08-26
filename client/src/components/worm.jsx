import { useState } from 'react';
import Selem from './selem'

function ktoeto(ia) {
    console.log(ia);
}

function Worm(props) {
    const [mylength, setCount] = useState(props.mylen)
    const [mycolor, setMyColor] = useState(props.color)
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
    for (let i = 0; i < mylength; i++) {
        result.push(<Selem
            newColor={setMyColor}
            meniaNajali={ktoeto}
            color={mycolor}
            key={"i" + i}
            style={{
                width: "128px",
                height: "128px",
                x: (128 * i) + "px",
                y: "300px",
                backgroundColor: colors[i],
            }}
            />)
    }
    console.log('now mylength is ', mylength);
    if (mylength != 5) {
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
            setCount(datajson['length'])
        });
    }
    return result 
}

export default Worm;