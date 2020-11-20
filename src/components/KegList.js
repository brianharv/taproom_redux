import React from 'react';
import Keg from './Keg';

function KegList(){
  return (
    <React.Fragment>
      <h3>This is the Keg list</h3>
      <p>This is where all the kegs with their properties will show.</p>
      <hr/>
      <Keg/>
    </React.Fragment>
  );
}

export default KegList;