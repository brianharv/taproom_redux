import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <React.Fragment>
      <h3>This is a Keg and it will take the props:</h3>
      <hr/>
      <p>{props.name}</p>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcCon}</p>
      <p>{props.flavor}</p>
      <p>{props.quantity}</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcCon: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number
}

export default Keg;