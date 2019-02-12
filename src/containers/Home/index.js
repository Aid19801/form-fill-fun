import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import NativeSelect from '@material-ui/core/NativeSelect';


import styles from './material-styles';

import presentAges from '../../lib/presentAges';

import './styles.css';

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedAgeFrom: 0,
      selectedAgeTo: 99,
      listOfAges: [],
    }
  }

  handleAgeFrom = event => {
    this.setState({ selectedAgeFrom: event.target.value });
  };

  handleAgeTo = event => {
    this.setState({ selectedAgeTo: event.target.value });
  };

  componentDidMount = () => {
    this.setState({ listOfAges: presentAges() })
  }

  render() {

    const { classes } = this.props;
    presentAges();
    return (
      <div className="homepage">

        <div className="content-card">
          <div className="header">header</div>
          <div className="main-body">
            <h1 className="title">About Your Activity</h1>

            <div className="each-input-container">
              <h4 className="sub-title">Activity Name</h4>
              
              <div className="each-input">
                <Input />
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
                <Input placeholder="e.g. example.com/activity" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Activity Phone Number</h4>
                <p className="sub-title">optional</p>
              </div>

              <div className="each-input">
                <Input placeholder="e.g. example.com/activity" />
              </div>
            </div>

          </div>
        </div>

        <div className="footer">
          <button onClick={null}>Back</button>
          <button onClick={null}>Next</button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(HomePage);
