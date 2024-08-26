export default function Selem(props) {
    
    return <button
        onClick={()=>props.newColor("blue")}
        style={{
            color: props.color,
            width: props.style.width,
            height: props.style.height,
            top: props.style.y,
            left: props.style.x,
        }}>worm</button>
}
