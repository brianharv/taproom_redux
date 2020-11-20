import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';



class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }

  render() {
    let currentState = null;
    let buttonText = null;
    let backButton = null;

    if (this.state.formVisibleOnPage) {   
      currentState = <NewKegForm />
      buttonText = "Return to Keg List";
    } else {
      currentState = <KegList/>
      buttonText = "Add Keg"
    }
    return(
        <React.Fragment>
            {currentState}
            <button className="btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
    );
  };
}

export default KegControl;