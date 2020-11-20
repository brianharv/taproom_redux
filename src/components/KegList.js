import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <h3>This is the Keg list</h3>
      <p>This is where all the kegs with their properties will show.</p>
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          alcCon={keg.alcCon}
          price={keg.price}
          quantity={keg.quantity}
          flavor={keg.flavor}
          key={index}
          />
        )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;