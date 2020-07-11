import React from "react";


function Jumbotron({ children }) {
    return (
        <div>
            <div className="jumbotron">
                {children}
            </div>
        </div>
    )
}

export default Jumbotron;