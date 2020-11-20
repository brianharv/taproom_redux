import React from "react";
import '../App.css';
import Header from "./Header";
import Body from "./Body";
// import taproom_wallpaper from './../images/taproom_wallpaper.jpg';



function App() {

  return(
    <React.Fragment>
      <div className="container-fluid">
        <Header/>
        {/* <img src={taproom_wallpaper} alt="background"></img> */}
        <Body/>
      </div>
    </React.Fragment>
  );
}

export default App;
