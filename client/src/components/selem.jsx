export default function Selem(props) {
    
    return <button
        style={{
            width: props.style.width,
            height: props.style.height,
            top: props.style.y,
            left: props.style.x,
            backgroundColor: props.style.backgroundColor,
        }}></button>
}
