import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';



class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    }
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {    
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }  

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg,
    })
  }


  render() {

    let currentState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentState = <KegDetails/>
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {   
      currentState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
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