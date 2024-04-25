import React from "react";

// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input onChange = {() => console.log("entering pasword...")}>Password</input>
        </div>
    )
}

export default Keypad;