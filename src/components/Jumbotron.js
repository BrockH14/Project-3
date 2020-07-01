import React from "react";


function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Shopalooza</h1>
                <hr className="my-4"></hr>
                <p className="lead">Compare and Shop for all your favorite items!</p>
            </div>

            <div className="my-container">
                <form>
                    <div className="row">
                        <div className="col-11">
                            <input className="input-group" type="text" placeholder="Search..." name="item-search"></input>
                        </div>
                        <div className="col-1">
                            <input type="submit" placeholder="Submit"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Jumbotron;