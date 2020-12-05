import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  const formStyling = {
    backgroundColor: '#F7F7F7',
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "10px",
    width: "50%",
    padding: "5px"
  }

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      flavor: event.target.flavor.value, 
      price: parseFloat(event.target.price.value), 
      alcCon: parseFloat(event.target.alcCon.value), 
      quantity: parseInt(event.target.quantity.value), 
      id: v4()})
  }

  return(
    <React.Fragment>
      <div style={formStyling}>
      <h3>Add A New Product </h3>
        <form className="form-group" onSubmit={handleNewKegFormSubmission}>
          <div className="form-group">
            <input
              type='text'
              name='name'
              placeholder='Beer Name'
              className="form-control"/>
          </div>   
          <div className="form-group">
            <input
              type='text'
              name='flavor'
              placeholder='type'
              className="form-control"/>
          </div>    
          <div className="form-group">
            <input
              type='text'
              name='brand'
              placeholder='Brewery'
              className="form-control"/>
          </div>
          <div className="form-group">
            <input
              type='number'
              step='0.1'
              name='alcCon'
              placeholder='ABV'
              className="form-control"/>
          </div>  
          <div className="form-group">      
            <input
              type='number'
              name='price'
              step='0.1'
              placeholder='price per pint'
              className="form-control"/>
          </div> 
          <div className="form-group">   
            <input
              type='number'
              name='quantity'
              placeholder='remaining servings (pints)' 
              className="form-control"/>
          </div>   
              <br/>
            <button className="btn btn-primary" type='submit'>Add</button>
        </form>
        </div>  
      <br/>
    </React.Fragment>
  );
  
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;