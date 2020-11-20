import React from 'react';
import Splash from './Splash';
import KegList from './KegList';

function Body() {
  return(
    <React.Fragment>
      <div className="row">
        <div className="col">
          <Splash/>
          <KegList/>
        </div>
      </div>    
    </React.Fragment>
  );
}

export default Body;