import Selem from './selem'

function Worm(props) {
    const myparts = props.positions    
    const colors = [
        "red",
        "blue",
        "#8B8000",
        "green",
        "purple",
        "orange",
        "cyan",
        'black',
        'magenta',
        'yellow'
    ]
    let result = [];
    for (let i = 0; i < myparts.length; i++) {
        result.push(<Selem
            key={"i" + i}
            style={{
                width: props.size + "px",
                height: props.size + "px",
                x: myparts[i].x + "px",
                y: myparts[i].y + "px",
                backgroundColor: colors[i],
            }}
            />)
    }
    return result 
}

export default Worm