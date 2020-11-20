import React from 'react';
import Splash from './Splash';
import KegControl from './KegControl';

function Body() {
  return(
    <React.Fragment>
      <div className="row">
        <div className="col">
          <Splash/>
          <KegControl/>
        </div>
      </div>    
    </React.Fragment>
  );
}

export default Body;