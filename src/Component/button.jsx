import React from "react";

const Button=(props)=>{
    return(
        <button class="button-57" role="button" onClick={props.onClick}>
            <span class="text">{props.name}</span><span>Click Me</span>       
        </button >
    );
}
export default Button;