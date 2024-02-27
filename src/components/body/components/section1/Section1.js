import React from "react";
import tick from '../../../../images/tick.png';
import info from '../../../../images/info.png'
import './section1.scss';

export default function Section1(){
    return(
        <div className="sec-1">
                <h1 className="m-0">Best Website builders in the US</h1>
                <div className="filters d-flex justify-content-between">
                    <div className="last-updates d-flex align-items-center justify-content-center">
                        <p className="d-flex align-items-center m-0">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={tick} alt="Tick" />
                                Last Updated - February 22, 2020 
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={info} alt="Tick" />
                                Advertising Disclosure
                            </div>
                        </p>
                    </div>
                    <div className="top-relevent d-flex align-items-center justify-content-center">
                        <p className="m-0">Top Relevent</p >
                        <div className=" d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z" fill="#626E79"/>
                            </svg>
                        </div>
                    </div>
                </div>
           </div>
    )
}