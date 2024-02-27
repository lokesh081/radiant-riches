import React from "react";
import './footer.scss'
import downarr from '../../images/downarrr.png'
export default function Footer(){
    return(
        <div className="footer d-flex align-items-center justify-content-center">
            <div className="container d-flex w-100 justify-content-start">
                <div className="categorys">
                    <h4>CATEGORIES</h4>
                    <ul className="m-0">
                        <li><a href='#'>Web Builder</a></li>
                        <li><a href='#'>Hosting</a></li>
                        <li><a href='#'>Data Center</a></li>
                        <li><a href='#'>Robotic-Automation</a></li>
                    </ul>
                </div>

                <div className="contact">
                    <h4>CONTACT</h4>
                    <ul className="m-0">
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Terms Of Service</a></li>
                        <li><a href='#'>Categories</a></li>
                        <li><a href='#'>About</a></li>
                    </ul>
                </div>

                <div className="lang d-flex align-items-center" >
                    <p><a href="#">United States   &nbsp; &nbsp;<img src={downarr} rel="img"/></a></p>
                </div>
            </div>
        </div>
    )
}