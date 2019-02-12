import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from './constants';

// material ui components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

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
    }
  }

  handleAgeFrom = event => {
    this.setState({ selectedAgeFrom: event.target.value });
  };

  handleAgeTo = event => {
    this.setState({ selectedAgeTo: event.target.value });
  };

  handleWebPage = event => {
    this.setState({ activityWebpage: event.target.value });
  }
  
  handlePhone = event => {
    this.setState({ activityPhoneNumber: event.target.value });
  }

  handleName = event => {
    this.setState({ activityName: event.target.value });
  }


  saveActivityData = () => {
    const { activityName, selectedAgeFrom, selectedAgeTo, activityWebpage, activityPhoneNumber } = this.state;
    let activityData = {
      activityName,
      selectedAgeFrom, selectedAgeTo, activityWebpage, activityPhoneNumber,
    }
    this.props.saveActivityData(activityData);
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
          <div className="header">header</div>
          <div className="main-body">
            <h1 className="title">About Your Activity</h1>

            <div className="each-input-container">
              <h4 className="sub-title">Activity Name</h4>
              
              <div className="each-input">
                <Input onChange={this.handleName}/>
              </div>

            </div>

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

            <div className="each-input-container">
              <h4 className="sub-title">Activity Webpage</h4>
              <p className="sub-title">Use a specific page if possible. Try to avoid homepage links.</p>
              
              <div className="each-input">
                <Input onChange={this.handleWebPage} placeholder="e.g. example.com/activity" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Activity Phone Number</h4>
                <p className="sub-title">optional</p>
              </div>

              <div className="each-input">
                <Input onChange={this.handlePhone} placeholder="e.g. example.com/activity" />
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

