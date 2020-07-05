import React from "react";

function Cards(props) {
    return (
        <div className="my-container">
            {props.results.map(result => (
                <div key={result} className="card">
                    <div className="card-header">
                        Store Name
                    </div>
                    <img src={result.image} className="card-img-top item-img" alt="..."></img>
                    <div className="card-body">
                            <h5 className="card-title">{result.title}</h5>
                            <p className="card-text">{result.price}</p>
                            
                            <a href={result.link}><button className="btn btn-primary">Go To Item</button></a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;