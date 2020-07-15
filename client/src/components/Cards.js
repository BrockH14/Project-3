import React from "react";

function Cards(props) {
    return (
        <div className="row">
            <div className="col-4">
                <div className="container my-container">
                    {props.results.map(result => (
                        <div key={result.uniqueKey} className="card text-center">
                            <div className="card-header target-header">
                                <h3><i className="fas fa-bullseye target-logo"></i> {result.store}</h3>
                            </div>
                            <img src={result.image} className="card-img-top item-img" alt="Target Item"></img>
                            <div className="card-body">
                                    <a rel="noopener noreferrer" target="_blank" href={result.link}><h5 className="card-title">{result.title}</h5></a>
                                    <h4 className="card-title item-price">{result.price}</h4>
                                    <a><button onClick={() => props.handleFormSaveT(result)} className="btn btn-primary">Save Item</button></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-4">
                <div className="container my-container">
                    {props.amazonResults.map(result => (
                        <div key={result.uniqueKey} className="card text-center">
                            <div className="card-header amazon-header">
                                <h3><i className="fab fa-amazon amazon-logo"></i> {result.store}</h3>
                            </div>
                            <img src={result.image} className="card-img-top item-img" alt="Amazon Item"></img>
                            <div className="card-body">
                                <a rel="noopener noreferrer" target="_blank" href={result.link}><h5 className="card-title">{result.title}</h5></a>
                                <h4 className="card-title item-price">{result.price}</h4>
                                <a><button onClick={() => props.handleFormSaveA(result)} className="btn btn-primary">Save Item</button></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-4">
                <div className="container my-container">
                    {props.walmartResults.map(result => (
                        <div key={result.uniqueKey} className="card text-center">
                            <div className="card-header walmart-header">
                                <h3><i className="fas fa-star-of-life walmart-name"></i> {result.store}</h3>
                            </div>
                            <img src={result.image} className="card-img-top item-img" alt="Amazon Item"></img>
                            <div className="card-body">
                                <a rel="noopener noreferrer" target="_blank" href={result.link}><h5 className="card-title">{result.title}</h5></a>
                                <h4 className="card-title item-price">{result.price}</h4>
                                <a><button onClick={() => props.handleFormSaveW(result)} className="btn btn-primary">Save Item</button></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards;