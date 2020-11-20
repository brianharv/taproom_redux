import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <h3>The Tap List</h3>
      
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          alcCon={keg.alcCon}
          price={keg.price}
          quantity={keg.quantity}
          flavor={keg.flavor}
          key={keg.id}
          id={keg.id}
          />
        )}
      <br></br>
      <p><em>Includes seasonal beverages, some items may not be available. Updated weekly.</em></p>  
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;