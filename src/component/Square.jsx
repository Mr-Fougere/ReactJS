import React, { useState } from "react";

export default function Square(props){
    const[disabled,setDisabled] = useState("disabled")
    const [iconeUp, setIconeUp] = useState("")
    return(
        <div 
            onMouseEnter={()=>(setDisabled(""),setIconeUp("icon_up")) } 
            onMouseLeave={()=>(setDisabled("disabled"),setIconeUp(""))} 
            onClick={props.action}
            className = {`Square bg-debug shadow_hd `}
        > 
            <div className = {`${iconeUp}`}>
                {props.icone}
            </div>
            <div className = {`${disabled}`} >
                {props.button}
            </div>
        </div>
        
        
    );
}