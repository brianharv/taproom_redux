import React from 'react';
import KegControl from './KegControl';

function Body() {
  return(
    <React.Fragment>
          <div className="splash text-center">
            <h1>Welcome to the Tap Room</h1>
            <h3>Make yourself at home.</h3>
          </div>
          <KegControl/>
    </React.Fragment>
  );
}

export default Body;