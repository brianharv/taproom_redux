import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, 
      flavor: event.target.flavor.value, price: event.target.price.value, alcCon: event.target.alcCon.value, 
      quantity: event.target.quantity.value, id: v4()})
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='flavor'
          placeholder='type' />
        <input
          type='text'
          name='brand'
          placeholder='Brewery' />
        <input
          type='number'
          step='0.1'
          name='alcCon'
          placeholder='ABV' />
        <input
          type='number'
          name='price'
          step='0.1'
          placeholder='price per pint' />
        <input
          type='number'
          name='quantity'
          placeholder='remaining servings (pints)' />
    
        <button className="btn btn-primary" type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
  
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;