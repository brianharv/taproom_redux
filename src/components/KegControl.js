import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import { connect } from 'react-redux';
import * as a from '../actions'
import * as c from '../actions/ActionTypes';
import PropTypes from 'prop-types';



class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
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
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    console.log(selectedKeg);
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
      currentState = <KegDetails keg={this.props.selectedKeg} onSellingAPint={this.handleSellingAPint}/>
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {   
      currentState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentState = <KegList kegList={this.props.masterKegList} onSelectedKeg={this.handleSelectedKeg}/> 
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

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}


KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;