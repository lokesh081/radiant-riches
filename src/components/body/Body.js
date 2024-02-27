import React from "react";
import './Body.scss';
import ServiceCard from "./components/products/ServiceCard";
import Navbar from "./components/sec-nav/Navbar";
import Section1 from "./components/section1/Section1";
import { data } from "./components/products/data";
import RelatedDeals from "./components/Related-deals/RelatedDeals";
import SignUp from "./components/SignUp/SignUp";

export default function Body(){
    return(
        <div className="Body container">
           <Section1/>
           <Navbar/>
           {data.map((data) => <ServiceCard builder={data}/>)}
           <RelatedDeals/>
           <SignUp/>
        </div>
    );
}
