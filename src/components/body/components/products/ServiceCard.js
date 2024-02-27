import React from "react";
import img from '../../../../images/imgg.png'
import './servicecard.scss';
import { data } from "./data";
import bestChoice from '../../../../images/bestchoice.png';
import bestValue from '../../../../images/bestvalue.png';
import star from '../../../../images/star.png';
import halfstar from '../../../../images/halfstar.png';
import downarr from '../../../../images/downarr.png';

export default function({builder}){

    
    //const builder = data[0];
    const starIterations = Array.from({ length: Math.floor(builder.stars) }, (_, index) => index);
    const starRemainder = builder.stars -  Math.floor(builder.stars);
    console.log(starIterations);


    function showMore(){
        
    }

    return(
        <div className="card d-flex  relative">

            <span className="count">{builder.id}</span>

            {builder.bestChoice ? <span className="best-choice"><img src={bestChoice} rel='best choice'/>Best choice</span> : ''}
            {builder.bestValue ? <span className="best-choice"><img src={bestValue} rel='best choice'/>Best Value</span> : ''}
               
            <div className="image">
                <img src={img} rel="img"/>
                <p className="">{builder.name}</p>
            </div>

            <div className="content py-4">
                <p style={{marginBottom : '4px'}}><b>{builder.content.boldText}</b>- {builder.content.text}</p>
                {builder.offer ? <span className="offer">{builder.offer}Off</span> : <></>}
                <p className="m-0" style={{marginBottom : '4px'}}><b>Main Highlights</b></p>
        
                <p className="" style={{ marginTop: '10px' , marginBottom : '22px' ,marginLeft : '18px'}} dangerouslySetInnerHTML={{ __html: builder.content.mainHighlight}} />
                {builder.content.extraContent? <p className="extra" dangerouslySetInnerHTML={{ __html: builder.content.extraContent}} /> : <></>}
                <p className="show-more m-0"><a onClick={showMore}  className="d-flex align-items-center">Show More <span><img src={downarr}/></span></a></p>
            </div>

            <div className="review d-flex align-items-center justify-between pb-4">
                <div className="rating d-flex align-items-center justify-content-center">
                        <p>{builder.ratings}</p>
                        <p className="m-0" style={{ paddingBottom : '8px' }}>{builder.ratingAppreciation}</p>
                        <span>
                            {starIterations.map((count)=>(<img src={star} rel='star'/>))}
                            {starRemainder? <img src={halfstar} rel='star'/> : <></>}
                        </span>
                </div>
                <div className="btn d-flex">
                    <button>
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}