import Card from "./Card";
import  {Link}  from "react-router-dom";
import React from "react";

const Body = ({ sheetData }) => {
    return (
        <div>
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
