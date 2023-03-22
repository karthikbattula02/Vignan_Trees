import { Link } from "react-router-dom";
import "../css/footer.css";
const Footer = () => {
  return (
    <>
      <div>
        <div class="footer">
        <div class="row">Presented  By: GREEN CLUB || CO-ORDINATOR : MRS.SIRISHA</div>
        <div class="row">Designed By: IT DEPARTMENT 2021-2025</div>
        <div class="row">Follow US</div>
        <div class="row">
            <ul>
                <li> <Link to ="https://www.linkedin.com/in/battula-karthik-a95561236">Karthik</Link></li>
                <li> <Link to ="https://www.linkedin.com/in/asrk06">Arnab</Link></li>
                <li><Link to ="https://www.linkedin.com/in/sri-abhiram-nadakuduti-6077b1256">Abhiram</Link></li>
                <li><Link to ="https://www.linkedin.com/in/raja-reddy-97075523b">Raja Reddy</Link></li>
            </ul>
       </div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;