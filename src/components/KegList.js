import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <div className="tapList">
      {Object.values(props.kegList).map((keg) =>
        <Keg 
          name={keg.name}
          whenKegClicked={props.onSelectedKeg}
          whenPintSold={props.onSellingAPint}
          brand={keg.brand}
          alcCon={keg.alcCon}
          price={keg.price}
          quantity={keg.quantity}
          flavor={keg.flavor}
          key={keg.id}
          id={keg.id} />
        )}
    </div>    
      <br></br>  
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onSelectedKeg: PropTypes.func,
  onSellingAPint: PropTypes.func
}

export default KegList;