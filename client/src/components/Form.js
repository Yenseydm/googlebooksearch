import React from "react";


function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
	<div class="row">
	<div class="col s3"></div>
	<div class="col s6">
	  <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Book Name"
        id="search"
      />
	</div>
	<div class="col">
      <button onClick={props.handleFormSubmit} className=" btn btn-floating btn-large waves-effect waves-light red">
	  <i class="material-icons left">search</i>Search
        </button>
		</div>
	</div>
    </div>
  </form>
  </div>
);
}

export default Form;