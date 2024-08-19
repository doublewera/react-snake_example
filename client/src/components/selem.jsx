export default function Selem(props) {
    
    return <button
        onClick={()=>props.newColor("blue")}
        style={{color: props.color}}>worm</button>
}
