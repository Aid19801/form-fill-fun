import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from './constants';

// material-ui & UI components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Header, UserInput } from '../../components';

// lib funcs
import presentAges from '../../lib/presentAges';

// styles
import styles from './material-styles';
import './styles.css';


class ActivityScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedAgeFrom: 0,
      selectedAgeTo: 99,
      activityWebpage: '',
      activityPhoneNumber: '',
      listOfAges: [],
      activityName: '',
    }
  }

  handleAgeFrom = event => {
    this.setState({ selectedAgeFrom: event.target.value });
  };

  handleAgeTo = event => {
    this.setState({ selectedAgeTo: event.target.value });
  };

  handleInputs = event => {
    this.setState({
      [event.target.name] : event.target.value,
    })
  }

  checkFieldsAreFilled = () => {
    const { activityName, selectedAgeFrom, selectedAgeTo, activityWebpage } = this.state;
    // check these are NOT incomplete before user can proceed:
    if (!activityName || !selectedAgeFrom || !selectedAgeTo || !activityWebpage) {
      return false;
    } else {
      return true;
    }
  }

  saveActivityData = () => {
    let isReady = this.checkFieldsAreFilled();

    // take everything from state
    const { activityName, selectedAgeFrom, selectedAgeTo, activityWebpage, activityPhoneNumber } = this.state;
    
    // pop it in a fresh object
    let activityData = {
      activityName,
      selectedAgeFrom, selectedAgeTo, activityWebpage, activityPhoneNumber,
    }

    // check the details have been entered
    if (!isReady) {
      alert('Please Check Fields Are Complete');
      return this.props.history.push('/');
    } else {
      // pop it in the store 
      this.props.saveActivityData(activityData);
      this.props.history.push('/venue');
    }
  }

  componentDidMount = () => {
    this.props.pageLoading();
    this.setState({ listOfAges: presentAges() })
  }

  render() {

    const { classes } = this.props;

    return (
      <div className="homepage">

        <div className="content-card">
          <Header />
          <div className="main-body">
            <h1 className="title">About Your Activity</h1>

            <UserInput
              subtitle="Activity Name"
              handleInputs={this.handleInputs}
              name="activityName"
              placeholder="eg Franks SoftPlay Rave!"
            />

            <div className="each-input-container">
              <h4 className="sub-title">Recommended Age</h4>

              <div className="age-selectors-container">
                <FormControl className={classes.formControl}>
                  <NativeSelect
                    className={classes.selectEmpty}
                    value={this.state.age}
                    name="age"
                    onChange={(e) => this.handleAgeFrom(e)}
                  >
                  <option value="" disabled>
                      From
                    </option>

                  { this.state.listOfAges.map((each, i) => {
                    return <option key={i} value={each}>{each}</option>
                  }) }


                  </NativeSelect>
                  <FormHelperText>From</FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <NativeSelect
                    className={classes.selectEmpty}
                    value={this.state.age}
                    name="age"
                    onChange={(e) => this.handleAgeTo(e)}
                  >
                  <option value="" disabled>
                      To
                    </option>

                  { this.state.listOfAges.map((each, i) => {
                    return <option key={i} value={each}>{each}</option>
                  }) }


                  </NativeSelect>
                  <FormHelperText>To</FormHelperText>
                </FormControl>
              </div>
              
            </div>

            <UserInput
              subtitle="Activity Webpage"
              handleInputs={this.handleInputs}
              subtitleSmall="Use a specific page if possible. Try to avoid homepage links."
              name="activityWebpage"
              placeholder="eg http://google.com/FredsSoftPlay/event/1894"
            />

            <UserInput
              subtitle="Activity Phone Number"
              handleInputs={this.handleInputs}
              subtitleSmall="optional"
              name="activityPhoneNumber"
              placeholder="eg +44 07123 123 123"
            />

          </div>
      </div>

        <div className="footer">
          <Button variant="contained" onClick={null}>
            <Link to='/'>
              Back
            </Link>
          </Button>

          <Button variant="contained" onClick={this.saveActivityData}>
            <Link to='/venue'>
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
  error: state.activityPage.error,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.ACTIVITY_SCREEN_LOADING }),
  saveActivityData: (activityData) => dispatch({ type: actions.SAVE_ACTIVITY_DATA, activityData })
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ActivityScreen));

