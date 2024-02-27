import React from "react";
import  './signup.scss';

export default function SignUp(){
    return(
        <div className="signup d-flex mb-5">
            <div className="child"><h1>Sign up and get exclusive special deals</h1></div>
            <div className="d-flex align-items-center justify-content-center child">
                <div className="input-group d-flex align-items-center justify-content-center">
                        <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2">Sign Up</span>
                        </div>
                </div>
            </div>
        </div>
    )
}