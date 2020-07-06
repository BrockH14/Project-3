import React from "react";

function Cards(props) {
    return (
        <div className="my-container">
            {props.results.map(result => (
                <div key={result} className="card text-center">
                    <div className="card-header">
                        <h3><i class="fas fa-bullseye target-logo"></i> {result.storeName}</h3>
                    </div>
                    <img src={result.image} className="card-img-top item-img" alt="..."></img>
                    <div className="card-body">
                            <a href={result.link}><h5 className="card-title">{result.title}</h5></a>
                            <h4 className="card-title item-price">{result.price}</h4>
                            <a href={result.link}><button className="btn btn-primary">Save Item</button></a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;