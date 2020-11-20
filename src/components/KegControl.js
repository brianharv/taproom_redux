import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';


class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.listVisibleOnPage,
    }));
  }

  render() {
    let currentState = null;
    let buttonText = null;

    if (this.formVisibleOnPage) {
      currentState = <NewKegForm/>
      buttonText = "Return to Keg List";
    } else {
      currentState = <KegList/>
      buttonText = "Add Keg"
    }
    return(
        <React.Fragment>
            {currentState}
            <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
    );
  };
}

export default KegControl;