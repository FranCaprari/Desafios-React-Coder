import React from "react";
import "./style.css";

const itemListContainer = ({greeting}) => {
    return (
        <div className="landing"> <span>{greeting}</span> </div>
    );
}

export default itemListContainer ;