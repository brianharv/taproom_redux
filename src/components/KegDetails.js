import React from 'react';
import PropTypes from 'prop-types';


function KegDetails(props) {
  const { keg, onSellingAPint } = props;

  const detailsStyling = {
    backgroundColor: '#F7F7F7',
    border: 'solid 1pt grey',
    textAlign: "center",
    color: 'black',
    borderRadius: "8px",
    marginBottom: "10px",
    width: "50%",
    padding: "5px"
  }

  return(
    <React.Fragment>
      <div style={detailsStyling}>
        <h2> {keg.name} - {keg.brand} Details</h2>
        <h3> Type: {keg.flavor} Price: ${keg.price} ABV% {keg.alcCon} </h3>
        <h3> Servings left: {keg.quantity}</h3>
      </div>
      <button className="btn btn-secondary" onClick={() => onSellingAPint(keg.id)}>Sell Pint</button>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onSellingAPint: PropTypes.func
}

export default KegDetails;