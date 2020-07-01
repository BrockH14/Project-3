import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>item</strong>
        </label>
        <input
          className="form-control"
          id="Name"
          type="text"
          value={q}
          placeholder="placeholder"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg search float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;