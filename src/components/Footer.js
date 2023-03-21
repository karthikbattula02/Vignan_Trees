import { Link } from "react-router-dom"

const Footer = ()=>{
    return (
        <>
            <div>
                <h4>Members :</h4>
                <ul>
                <Link to = ""> <li>Arnab Sarkar</li></Link>
                <Link to = ""> <li>Raja Reddy</li></Link>
                <Link to = ""> <li>Abhiram</li></Link>
                <Link to = ""> <li>B.Karthik</li></Link>
                </ul>
            </div>
        </>
    )
}

export default Footer;