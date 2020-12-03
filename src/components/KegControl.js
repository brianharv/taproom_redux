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
      formVisibleOnPage: false,
      selectedKeg: null
    });
  }

  handleSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg,
    })
  }

  handleSellingAPint = (id) => {
    const newQuantity = this.state.masterKegList.filter(keg => keg.id === id)[0];
    if(newQuantity.quantity > 0) {
      newQuantity.quantity -= 1;
      newQuantity.quantity = newQuantity.quantity.toString();
      const masterKegWithUpdatedQuantity = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(newQuantity); 
        this.setState({
      masterKegList: masterKegWithUpdatedQuantity,
    });
    } else {
      alert("out of stock");
    }
  }


  render() {

    let currentState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentState = <KegDetails keg={this.state.selectedKeg} onSellingAPint={this.handleSellingAPint}/>
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {   
      currentState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentState = <KegList kegList={this.state.masterKegList} onSelectedKeg={this.handleSelectedKeg}/> 
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