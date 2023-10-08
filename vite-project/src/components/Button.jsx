import React, { useState } from "react";

const Button= (props)=>{
    const [hover, setHover] = useState(false)

    const btnStyle={
        padding: "20px",
        background: "linear-gradient(45deg, #061122, #13ccd4)",
        width: "150px",
        fontWeight: "bold",
        fontSize: "18px",
        color: "white",
        border: "none",
        position:"relative",
        boxShadow: hover?"black 2.95px 2.95px 2.6px":"black 5.95px 5.95px 5.96px",
        top:hover?"3px":"0px",
        left:hover?"3px":"0px",   
     }
    return(
        <>
         <button style={btnStyle} onClick={props.func} onMouseUp={()=>setHover(false)} onMouseDown={()=>setHover(true)}>{props.msg} </button>
        </>
    )

}
export default Button;