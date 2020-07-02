import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div className="my-container">
        <form>
            <div className="row">
                <div className="col-11">
                    <input id="name"
                     value={q} 
                     className="input-group" 
                     type="text" 
                     placeholder="Search..." 
                     name="q"
                     onChange={handleInputChange}
                     required
                     ></input>
                </div>
                <div className="col-1">
                    <input 
                    type="submit" 
                    placeholder="Submit"
                    onClick={handleFormSubmit}
                    ></input>
                </div>
            </div>
        </form>
    </div>
  );
}

export default Form;