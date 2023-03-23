import {Link} from "react-router-dom"
import "../css/header.css"
const Header = ()=>{
    return(
        <>
            
            <div className="header">
                <table >
                    <tbody>
                    <tr>
                      <td>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Vignan_logo.png/1028px-Vignan_logo.png" ></img>
                      </td>
                      <td><h1>Vignan's Institute of Information Technology</h1></td>
                       <td>
                         <div className="header-right">
                         <Link className="active" to = "/">Home</Link>
                          
                     </div>
                     </td>
                     </tr>
                     </tbody>
                 </table>
            </div>
            
        </>
    )
}

export default Header;