import { useState } from 'react'
import { Link } from "react-router-dom"



function HomePage(props) {
    const [yourData, setYourData] = useState({
        yname: "",
        ssize: 9
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setYourData((prevState) => ({ ...prevState, [name]: value }));
    }
    return (
        <>
        <h1>Snake</h1>
        <form>
            <label>
                Your name:
                <input type="text" name="username" 
                    onChange={handleChange}
                    value={yourData.yname} />
            </label>
            <label>
                Snake Start Length:
                <input type="number" name="ssize"
                onChange={handleChange}
                value={yourData.ssize} />
            </label>
            <Link to={"/Game/" + yourData.ssize}>Play</Link>
        </form>
        </>
    )
  }
  
  export default HomePage