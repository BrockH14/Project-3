import React from "react";

function Form(props) {
  return (
    <div className="my-container">
        <form>
            <div className="row">
                <div className="col-11">
                    <input id="name"
                     value={props.q} 
                     className="input-group" 
                     type="text" 
                     placeholder="Search..." 
                     name="q"
                     onChange={props.handleInputChange}
                     required
                     ></input>
                </div>
                <div className="col-1">
                    <button 
                    className="btn btn-primary btn-sm"
                    type="submit" 
                    onClick={props.handleFormSubmit}
                    >Search</button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default Form;