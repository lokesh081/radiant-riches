import React from "react";
import './navabar.scss';
import arrow from '../../../../images/arrow.png'

export default function Navbar(){
    return(
        <div className="menu-nav">
            <div className="menu">
                <ul className="d-flex p-0 m-0">
                    <li>Tools</li>
                    <li>AWS Builder</li>
                    <li>Start Build</li>
                    <li>Build Supplies</li>
                    <li>Tooling</li>
                    <li>BlueHosting</li>
                </ul>
            </div>

            <div className="nav">
                <ul className="d-flex p-0">
                    <li><a href="#">Home</a><img src={arrow}/></li>
                    <li><a href="#">Hosting for all</a> <img src={arrow}/></li>
                    <li><a href="#">Hosting </a><img src={arrow}/></li>
                    <li><a href="#">Hosting6 </a><img src={arrow}/></li>
                    <li><a href="#">Hosting5 </a></li>
                </ul>
            </div>
        </div>
    )
}