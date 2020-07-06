import React from "react";

function Cards(props) {
    return (
        <div className="row">
            <div className="col-6">
                <div className="my-container">
                    {props.results.map(result => (
                        <div key={result.uniqueKey} className="card text-center">
                            <div className="card-header">
                                <h3><i className="fas fa-bullseye target-logo"></i> {result.storeName}</h3>
                            </div>
                            <img src={result.image} className="card-img-top item-img" alt="Target Item"></img>
                            <div className="card-body">
                                    <a rel="noopener noreferrer" target="_blank" href={result.link}><h5 className="card-title">{result.title}</h5></a>
                                    <h4 className="card-title item-price">{result.price}</h4>
                                    <a href={result.link}><button className="btn btn-primary">Save Item</button></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-6">
                <div className="my-container">
                    {props.amazonResults.map(result => (
                        <div key={result.uniqueKey} className="card text-center">
                            <div className="card-header">
                                <h3><i className="fab fa-amazon"></i></h3>
                            </div>
                            <img src={result.image} className="card-img-top item-img" alt="Amazon Item"></img>
                            <div className="card-body">
                                <a rel="noopener noreferrer" target="_blank" href={result.link}><h5 className="card-title">{result.title}</h5></a>
                                <h4 className="card-title item-price">{result.price}</h4>
                                <a href={result.link}><button className="btn btn-primary">Save Item</button></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards;