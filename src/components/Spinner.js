import React from "react";
import "./Spinner.css";

function Spinner(){
    return(
        <div className="flex flex-col items-center space-y-2">
            <div className="spinner"></div>
            <p className="text-black font-semibold text-lg">Loading...</p>
        </div>
        
    )
}

export default Spinner;