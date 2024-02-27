import React from "react";
import img from '../../../../../images/imgg.png';
import './card.scss';

export default function({productdata}){

    return(
        <div className="rel-deal-card d-flex align-items-center justify-content-center flex-column relative" >
            <div className="image ">
                <img src={img} rel="img"/>
            </div>
            <div className="description">
                <p><span>{productdata.offer}Off</span><span>{productdata.offerTimeLimit}</span></p>
                <p className="name text-center"><b>{productdata.name}</b></p>
                <p>{productdata.description}</p>
            </div>
            <div className="price">
                <span className="actual-price">${productdata.price}</span>
                <span className="offer-price">${productdata.offerPrice}</span>
                <span className="offer">({productdata.offer})</span>
            </div>
            <button>View Deal</button>
        </div>
    )
}