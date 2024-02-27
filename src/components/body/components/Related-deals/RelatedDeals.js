import React from "react";
import Card from "./components/Card";
import './relatedDeals.scss';
import { data } from "./components/data";

export default function RelatedDeals(){
    return(
    <div className="related-deals py-5">
        <h1>Related deals you might like for</h1>
        <div className="cards d-flex">
            {data.map((data) => (<Card productdata={data}/>))}
        </div>
    </div>
    )
}