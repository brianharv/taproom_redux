import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import { connect } from 'react-redux';
import * as a from '../actions'
import PropTypes from 'prop-types';



class KegControl extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg !== null) {
      const action = a.nullKeg();
      dispatch(action)
    } else {    
      const action2 = a.toggleForm();
      dispatch(action2);
    }
  }  

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleSelectedKeg = (keg) => {
    const { dispatch } = this.props
    const action = a.selectKeg(keg);
    dispatch(action);
  }

  handleSellingAPint = (pint) => {
    if (pint.quantity > 0) {
      const { dispatch } = this.props;
      const action = a.sellPint(pint)
      dispatch(action);
    } else {
      alert('out of stock');
    }
  }


  render() {

    let currentState = null;
    let buttonText = null;

    if (this.props.selectedKeg != null) {
      console.log(this.props.selectedKeg);
      currentState = <KegDetails keg={this.props.selectedKeg} />
      buttonText = "Return to Keg List";
    }
    else if (this.props.formVisibleOnPage) {   
      currentState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentState = <KegList kegList={this.props.masterKegList} onSelectedKeg={this.handleSelectedKeg} onSellingAPint={this.handleSellingAPint}/> 
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
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}


KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;