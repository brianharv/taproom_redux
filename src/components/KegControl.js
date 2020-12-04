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
    if (this.props.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      });
    } else {    
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
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
    const { dispatch } = this.props;
    const action = a.selectKeg(id)
    const selectedKeg = this.props.masterKegList[id];
    dispatch(action);
    this.setState({
      selectedKeg: selectedKeg,
    })
  }

  handleSellingAPint = (pint) => {
    const { dispatch } = this.props;
    const action = a.sellPint(pint)
    dispatch(action);
  }


  render() {

    let currentState = null;
    let buttonText = null;

    if (this.props.selectedKeg != null) {
      currentState = <KegDetails keg={this.props.selectedKeg} onSellingAPint={this.handleSellingAPint}/>
      buttonText = "Return to Keg List";
    }
    else if (this.props.formVisibleOnPage) {   
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