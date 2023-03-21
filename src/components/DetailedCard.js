import { Link, useParams } from "react-router-dom";

const DetailedCard = ({
    sheetData
})=>{
    const {sno} = useParams();
    const real = sheetData.find((plant) => plant.sno == sno);

    return (
        <div>
            <img src = {real.url} alt={real.CommonName}/>
            <h4>{real.CommonName}</h4>
            <h4>{real.ScientificName}</h4>
            <h4>{real.uses}</h4>
            <h4>{real.Habitat}</h4>
            <h5>To Know more about Greens of Vignan <Link to="/" >CLICK HERE!</Link></h5>
        </div>
    )
}

export default DetailedCard;
