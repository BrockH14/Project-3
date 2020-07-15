import React from "react";
import "../App.css"

function Card(props) {
  return (
    <div className="row">
        <div className="col-9">
            <div className="my-container">
                {props.results.map(result => (
                    <div key={result.uniqueKey} className="card text-center">
                        <div className="card-header">
                            <h3><i className={result.storeLogo}></i> {result.store}</h3>
                        </div>
                        <img src={result.image} className="card-img-top item-img" alt="Target Item"></img>
                        <div className="card-body">
                                <a rel="noopener noreferrer" target="_blank" href={result.link}><h5 className="card-title">{result.title}</h5></a>
                                <h4 className="card-title item-price">{result.price}</h4>
                                <button onClick={() => props.handleFormDel(result)} className="btn btn-danger">Delete Item</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
  )
}

export function Logo(store){
  return (
    <i className={store}></i>
  )
}

export default Card;
