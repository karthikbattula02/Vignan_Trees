import Card from "./Card";
import "../css/body.css"
import  {Link}  from "react-router-dom";
import React from "react";

const Body = ({ sheetData }) => {
    return (
        <div className="card-wrapper">
        {
        sheetData.map((plant) => (
            <Link to = {"/"+plant.sno}>
                <Card {...plant} key={plant.sno}/>
            </Link>
        ))}
        </div>
    );
};

export default Body;
