import React from "react";
import './css/Body.css';
import Data from "./Sdata";
const Body = ()=>{
    return(
     <>
      <div className="images-container">
          {Data.map( function ncards(val)
          {
          return(
   
          <div className="product-image">
          <img  src={val.add} alt="Clothes" />
          <button>{val.pr}</button>
          </div>);})}
   </div>
     </>
    )
}
export default Body;