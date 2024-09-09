export default function Selem(props) {
    
    return <button
        onClick={(e)=>props.meniaNajali(e.target)}
        style={{
            width: props.style.width,
            height: props.style.height,
            top: props.style.y,
            left: props.style.x,
            backgroundColor: props.style.backgroundColor,
        }}></button>
}
