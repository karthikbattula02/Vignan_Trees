import { Link, useParams } from "react-router-dom";
import "../css/Cardstyle.css";
const DetailedCard = ({ sheetData }) => {
  const { sno } = useParams();
  const real = sheetData.find((plant) => plant.sno == sno);

  return (
    <div>
      <div className="blog-card">
             <input type="radio" name="select" id="tap-2" checked />
             <input type="checkbox" id="imgTap" />
             <div className="inner-part">

                         
                            <label for="imgTap" className="img">
                                       <img className="img-2" src={real.url} />
                            </label>
                        
                            <table>
                               <tr>
                             <div className="content content-2">
                                <table>
                                  <tbody>
                                     <tr>
                                        <td><div className="title" style={{fontSize : "23px"}}>Common Name:</div></td>
                                        <td><div className="text" style={{paddingLeft : "10px",paddingTop : "10px"}}> <h4>{real.CommonName}</h4></div></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table>
                                  <tbody>
                                      <tr>
                                         <td><div className="title" style={{fontSize : "23px"}}>ScientificName:</div></td>
                                          <td> <div className="text" style={{paddingLeft : "10px",paddingTop : "10px"}}>
                                              <h4>{real.ScientificName}</h4>
                                           </div></td>
                                       </tr>
                                       </tbody>
                                </table>
                            <div className="title">Habitat:</div>
                                <div className="text">
                                   <h4>{real.Habitat}</h4>
                                </div>
                           <div className="title">Uses:</div>
                                <div className="text">
                                    <h4>{real.uses}</h4>
                            </div>
                         <Link to="/"><button>CLICK HERE FOR MORE </button></Link>
                   </div>
                   </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
