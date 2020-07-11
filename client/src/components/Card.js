import React from "react";

function Card(props) {
  return (
    <div className="row">
        <div className="col-12">
            <div className="my-container">
                {props.results.map(result => (
                    <div key={result.uniqueKey} className="card text-center">
                        <div className="card-header">
                            <h3 className={result.storeLogo}> {result.store}</h3>
                        </div>
                        <img src={result.image} className="card-img-top item-img" alt="Target Item"></img>
                        <div className="card-body">
                                <a rel="noopener noreferrer" target="_blank" href={result.link}><h5 className="card-title">{result.title}</h5></a>
                                <h4 className="card-title item-price">{result.price}</h4>
                                <a><button onClick={() => props.handleFormDel(result)} className="btn btn-danger">Delete Item</button></a>
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
