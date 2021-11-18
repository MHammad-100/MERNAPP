  import React,{Component, useState} from 'react';
  function User(props) {
  var [C,setC]=useState(null);
  var [A,setA]=useState(null);
  var [B,setB]=useState(null);
      return(
        <div style={{fontFamily:"times new roman"}}>
          <input style={{height:"30px",width:"300px", margin:10, padding:10}} type="text" onChange={(e)=>setA(parseInt(e.target.value))} placeholder="Enter first number" /><br/><br/>
          <input style={{height:"30px",width:"300px", margin:10, padding:10}} type="text" onChange={(e)=>setB(parseInt(e.target.value))} placeholder="Enter second number" /><br/><br/>
          <button style={{height:"30px",width:"50px", marginRight:5}} onClick={(e)=>setC(A+B)}>Add</button><br/>
          <input style={{height:"30px",width:"300px", margin:10, padding:10}} type="text" value={C} /><br/><br/>


        </div>
      )
    }
  export default User;