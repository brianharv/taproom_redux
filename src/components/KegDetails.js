import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

function KegDetails(props) {
  const { keg, onSellingAPint } = props;
  return(
    <React.Fragment>
      <h3>This is the details view</h3>
      <p>{keg.name} {keg.brand} {keg.flavor} {keg.price} {keg.alcCon} {keg.quantity} {keg.id}</p>
      <button className="btn btn-secondary" onClick={() => onSellingAPint(keg.id)}>Sell Pint</button>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onSellingAPint: PropTypes.func
}

export default KegDetails;