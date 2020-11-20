import React from 'react';
import { v4 } from 'uuid';

function NewKegForm() {
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    
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
          name='alcCon'
          placeholder='ABV' />
        <input
          type='number'
          name='price'
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

export default NewKegForm;