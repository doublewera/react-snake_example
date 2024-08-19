import { useState } from 'react';
import Selem from './selem'

function Worm(props) {
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
    for (let i = 0; i < 5; i++) {
        // result.push(<Selem color={colors[i]} key={"i" + i} />)
        result.push(<Selem newColor={setMyColor} color={mycolor} key={"i" + i} />)
    }
    return (result); 
    //return (<h1>kuku</h1>); 
}

export default Worm;