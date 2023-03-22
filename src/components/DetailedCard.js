import { Link, useParams } from "react-router-dom";
import "../css/Cardstyle.css";
const DetailedCard = ({ sheetData }) => {
  const { sno } = useParams();
  const real = sheetData.find((plant) => plant.sno == sno);

  return (
    <div>
      <div class="blog-card">
             <input type="radio" name="select" id="tap-2" checked />
             <input type="checkbox" id="imgTap" />
             <div class="inner-part">
                 <table>
                      <tr>
                         <td>
                            <label for="imgTap" class="img">
                                       <img class="img-2" src={real.url} />
                            </label>
                        </td>
                        <td>
                             <div class="content content-2">
                                <table>
                                     <tr>
                                        <td><div class="title">Common Name:</div></td>
                                        <td><div class="text"> <h4>{real.CommonName}</h4></div></td>
                                    </tr>
                                </table>
                                <table>
                                      <tr>
                                         <td><div class="title">ScientificName:</div></td>
                                          <td> <div class="text">
                                              <h4>{real.ScientificName}</h4>
                                           </div></td>
                                       </tr>
                                </table>
                            <div class="title">Habitat:</div>
                                <div class="text">
                                   <h4>{real.Habitat}</h4>
                                </div>
                           <div class="title">Uses:</div>
                                <div class="text">
                                    <h4>{real.uses}</h4>
                            </div>
                         <Link to="/"><button>CLICK HERE FOR MORE PLANTS</button></Link>
                   </div>
                </td>
                </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
