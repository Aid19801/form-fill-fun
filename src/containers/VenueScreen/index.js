import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from './constants';

// material ui components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

// lib funcs
// import findAddresses from '../../lib/findAddresses';

// styles
import styles from './material-styles';
import './styles.css';

class VenueScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      suggestions: [],
      placeName: '',
      postcode: '',
      buildingUnit: '',
      buildingName: '',
      streetNumber: '',
      streetName: '',
      town: '',
    }
  }

  componentDidMount = () => {
    this.props.pageLoading();
  }

  handleInputs = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  saveVenueData = () => {
    // take everything from state
    const { placeName, postcode, buildingUnit, buildingName,
    streetNumber, streetName, town } = this.state;

    // pop it in fresh object
    let venueData = {
      placeName, postcode, buildingUnit, buildingName,
    streetNumber, streetName, town,
    }
    
    // pop in the store
    this.props.saveVenueData(venueData);
  }

  render() {
  
    const { classes } = this.props;

    return (
      <div className="homepage">

        <div className="content-card">
          <div className="header">header</div>
          <div className="main-body">
            <h1 className="title">Add The Address</h1>
            <Button className={classes.button} variant="contained" color="primary" onClick={null}>Copy from existing activity</Button>

            <div className="each-input-container">
              <h4 className="sub-title">Place name</h4>
              
              <div className="each-input">
                <Input name="placeName" onChange={this.handleInputs} placeholder="e.g. Frank's Soft Play!" />
              </div>

            </div>

            <div className="each-input-container">
              <h4 className="sub-title">Postcode</h4>              
              <div className="each-input">
                <Input name="postcode" onChange={this.handleInputs} placeholder="SE1 7QP" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Building Unit</h4>
                <p className="sub-title">optional</p>
              </div>

              <div className="each-input">
                <Input name="buildingUnit" onChange={this.handleInputs} placeholder="e.g. Unit 10" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Building Name</h4>
                <p className="sub-title">optional</p>
              </div>

              <div className="each-input">
                <Input name="buildingName" onChange={this.handleInputs}placeholder="e.g. West House" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Street Number</h4>
              </div>

              <div className="each-input">
                <Input name="streetNumber" onChange={this.handleInputs} placeholder="e.g. 10" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Street Name</h4>
              </div>

              <div className="each-input">
                <Input name="streetName" onChange={this.handleInputs} placeholder="e.g. Cordwallis Road" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Town</h4>
              </div>

              <div className="each-input">
                <Input name="town" onChange={this.handleInputs} placeholder="e.g. London" />
              </div>
            </div>

          </div>
        </div>

        <div className="footer">
          <Button variant="contained" onClick={null}>
            <Link to='/'>
              Back
            </Link>
          </Button>

          <Button variant="contained" onClick={this.saveVenueData}>
            <Link to='/confirmation'>
              Next
            </Link>
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.activityPage.isLoading,
  addresses: state.venuePage.addresses,
  activityData: state.activityPage.activityData,
  error: state.activityPage.error,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.VENUE_SCREEN_LOADING }),
  saveVenueData: (obj) => dispatch({ type: actions.SAVE_VENUE_DATA, venueData: obj }),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(VenueScreen));

// export default connect(mapStateToProps, mapDispatchToProps)(VenueScreen);

