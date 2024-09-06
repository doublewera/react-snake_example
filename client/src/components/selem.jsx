export default function Selem(props) {
    
    return <button
        //onClick={()=>props.newColor("blue")}
        onClick={(e)=>props.meniaNajali(e.target)}
        style={{
            color: props.color,
            width: props.style.width,
            height: props.style.height,
            top: props.style.y,
            left: props.style.x,
            backgroundColor: props.style.backgroundColor,
        }}></button>
}
