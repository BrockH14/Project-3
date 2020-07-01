import React from "react";

function Cards() {
    return (
        <div className="my-container">
            <div className="card">
                <div className="card-header">
                    Store Name
                </div>
                <div className="card-body">
                    <h5 className="card-title">Item Title</h5>
                    <p className="card-text">Item Description</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;