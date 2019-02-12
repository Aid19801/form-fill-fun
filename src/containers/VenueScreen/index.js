import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter} from 'react-router-dom';

import * as actions from './constants';

// material ui components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { UserInput, Header } from '../../components';

// styles
import styles from './material-styles';
import './styles.css';

class VenueScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      placeName: '',
      postcode: '',
      buildingUnit: '',
      buildingName: '',
      streetNumber: '',
      streetName: '',
      town: '',
      fieldsComplete: false,
      suggestions: [],
    }
  }

  componentDidMount = () => {
    this.props.pageLoading();
  }

  handleInputs = (e) => {
    this.props.updateStateUserIsInputtingData();
    this.setState({ [e.target.name]: e.target.value })
    this.searchForPlace();
  }

  checkFieldsAreFilled = () => {
    // take everything from state
    const { placeName, postcode,
      streetNumber, streetName, town } = this.state;

    // check these are NOT incomplete before user can proceed:
    if (!placeName || !postcode || !streetNumber || !streetName || !town) {
      return false;
    } else {
      return true;
    }
  }

  saveVenueData = () => {
    let isReady = this.checkFieldsAreFilled();
    // take everything from state
    const { placeName, postcode, buildingUnit, buildingName,
    streetNumber, streetName, town, fieldsComplete } = this.state;

    // pop it in fresh object
    let venueData = {
      placeName, postcode, buildingUnit, buildingName,
    streetNumber, streetName, town,
    }

    if (!isReady) {
      alert('Please Check Fields Are Complete');
      return this.props.history.push('/venue');
    } else {
      // pop it in the store 
      this.props.saveVenueData(venueData);
      this.props.history.push('/confirmation');
    }
  }


  searchForPlace = () => {
    const { placeName, buildingName } = this.state;
    let matchedObject = {};
    fetch('http://localhost:3001/addresses')
      .then(res => res.json())
      .then(arr => {

        matchedObject = arr.filter(obj =>  obj.buildingUnit === '500');
        console.log('matched: ', matchedObject);
      })
      .catch(err => err);
  }

  render() {
  
    const { classes } = this.props;

    return (
      <div className="homepage">

        <div className="content-card">
          <Header />
          <div className="main-body">
            <h1 className="title">Add The Address</h1>
            <Button className={classes.button} variant="contained" color="primary" onClick={null}>Copy from existing activity</Button>

            <UserInput 
              subtitle="Place Name"
              placeholder="e.g. Frank's Soft Play!"
              handleInputs={this.handleInputs}
              name="placeName"
            />

            <UserInput 
              subtitle="Postcode"
              placeholder="e.g. SE1 6TY"
              handleInputs={this.handleInputs}
              name="postcode"
            />

            <UserInput 
              subtitle="Building Unit"
              subtitleSmall="optional"
              placeholder="e.g. Unit 4b"
              handleInputs={this.handleInputs}
              name="buildingUnit"
            />

            <UserInput 
              subtitle="Building Name"
              subtitleSmall="optional"
              placeholder="e.g. Wallis House"
              handleInputs={this.handleInputs}
              name="buildingName"
            />

          
            <UserInput 
              subtitle="Street Number"
              placeholder="e.g. 21"
              handleInputs={this.handleInputs}
              name="streetNumber"
            />
          
            <UserInput 
              subtitle="Street Name"
              placeholder="e.g. Cordle Street"
              handleInputs={this.handleInputs}
              name="streetName"
            />
          
            <UserInput 
              subtitle="Town"
              placeholder="e.g. Maidenhead"
              handleInputs={this.handleInputs}
              name="town"
            />

          </div>
        </div>

        <div className="footer">
          <Button variant="contained" onClick={null}>
            <Link to='/'>
              Back
            </Link>
          </Button>

          <Button variant="contained" onClick={this.saveVenueData}>
            
              Next
            
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
  updateStateUserIsInputtingData: () => dispatch({ type: actions.USER_INPUTTING_DATA }),
  saveVenueData: (obj) => dispatch({ type: actions.SAVE_VENUE_DATA, venueData: obj }),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(withStyles(styles)(VenueScreen)));

// export default connect(mapStateToProps, mapDispatchToProps)(VenueScreen);

