import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';



class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterKegList: []
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState = ({
      masterKegList: newMasterKegList
    });
  }

  render() {
    let currentState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {   
      currentState = <NewKegForm />
      buttonText = "Return to Keg List";
    } else {
      currentState = <KegList kegList={this.state.masterKegList} /> // kegList is a prop we need to pass down from KegControl to KegList and from KegList to Keg
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