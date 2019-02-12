import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

import * as actions from './constants';

// material ui components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

// lib funcs
// import findAddresses from '../../lib/findAddresses';

// styles
import styles from './material-styles';
import './styles.css';

class VenueScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  handlePlaceName = (e) => {
    let searchTerm = e.target.value;
    fetch('http://localhost:3001/addresses')
      .then(res => res.json())
      .then(json => {
        console.log('returned json: ', json);
      })
      .catch(err => console.log(err));
  }

  
  componentDidMount = () => {
    this.props.pageLoading();
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
                <Input onChange={this.handlePlaceName}/>
              </div>

            </div>

            <div className="each-input-container">
              <h4 className="sub-title">Postcode</h4>              
              <div className="each-input">
                <Input onChange={this.handleWebPage} placeholder="e.g. example.com/activity" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Building Unit</h4>
                <p className="sub-title">optional</p>
              </div>

              <div className="each-input">
                <Input onChange={this.handlePhone} placeholder="e.g. example.com/activity" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Building Name</h4>
                <p className="sub-title">optional</p>
              </div>

              <div className="each-input">
                <Input onChange={this.handlePhone} placeholder="e.g. example.com/activity" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Street Number</h4>
              </div>

              <div className="each-input">
                <Input onChange={this.handlePhone} placeholder="e.g. example.com/activity" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Street Name</h4>
              </div>

              <div className="each-input">
                <Input onChange={this.handlePhone} placeholder="e.g. example.com/activity" />
              </div>
            </div>

            <div className="each-input-container">
              <div className="flex-word-wrap">
                <h4 className="sub-title">Town</h4>
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
  pageLoading: () => dispatch({ type: actions.VENUE_SCREEN_LOADING }),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(VenueScreen));

// export default connect(mapStateToProps, mapDispatchToProps)(VenueScreen);

