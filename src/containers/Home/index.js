import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
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
                <div className="age-selector">
                  <NativeSelect
                    native
                    value={this.state.ageFrom}
                    onChange={(e) => this.handleAgeFrom(e)}
                  >
                  { this.state.listOfAges.map(((each, i) => {
                    return <option key={i} value={each}>{each}</option>
                  })) }
                  </NativeSelect>
                </div>

                <div className="age-selector">
                  <NativeSelect
                    native
                    value={this.state.ageFrom}
                    onChange={(e) => this.handleAgeTo(e)}
                  >
                  { this.state.listOfAges.map(((each, i) => {
                    return <option key={i} value={each}>{each}</option>
                  })) }
                  </NativeSelect>
                </div>

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
