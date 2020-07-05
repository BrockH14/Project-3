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
                    <input 
                    type="submit" 
                    placeholder="Submit"
                    onClick={props.handleFormSubmit}
                    ></input>
                </div>
            </div>
        </form>
    </div>
  );
}

export default Form;