import React from 'react';
import "./Cards.module.css"

const Cards = ({ id, name, price, category, image }) => {



    return (
        <div key={id} style={{padding:"10px", margin:"10px",paddingTop:"0px",maxWidth:"300px", background:"gray", borderRadius:"10px"}}>
            <img style={{maxWidth:"300px",borderRadius:"10px"}} src={image} alt="nohayimagen" />
            <p style={{}}>{name}</p>
            <span>${price} USD</span>
            <p>{category}</p>

        </div>

    );
};
export default Cards;