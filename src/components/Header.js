import {Link} from "react-router-dom"
import "../css/header.css"
const Header = ()=>{
    return(
        <>
            <Link to = "/">
            <div className="header">
                <table >
                    <tr>
                      <td>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Vignan_logo.png/1028px-Vignan_logo.png" ></img>
                      </td>
                      <td><h1>Vignan's Institute of Information Technology</h1></td>
                       <td>
                         <div className="header-right">
                          <a className="active" href="#home">Home</a>
                     </div>
                     </td>
                     </tr>
                 </table>
            </div>
            </Link>
        </>
    )
}

export default Header;