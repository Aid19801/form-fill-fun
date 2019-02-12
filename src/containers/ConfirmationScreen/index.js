import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from './constants';

// material ui components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { ConfirmationBox } from '../../components';

// styles
import styles from './material-styles';
import './styles.css';

class ConfirmationScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      suggestions: [],
    }
  }

  componentDidMount = () => {
    this.props.pageLoading();
  }

  render() {

    const { classes, activityData, venueData } = this.props;

    return (
      <div className="homepage">

        <div className="content-card">
          <div className="header">header</div>
            <div className="main-body">
                <h1 className="title">All Done!</h1>

                <ConfirmationBox title="event" {...activityData} />
                <ConfirmationBox title="venue" {...venueData} />

            </div>
        </div>

      <div className="footer">
          <Button variant="contained" onClick={null}>
            <Link to='/venue'>
              Back
            </Link>
          </Button>

          <Button variant="contained" onClick={this.saveActivityData}>
            <Link to='/foo'>
              Post
            </Link>
          </Button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.confirmationPage.isLoading,
  activityData: state.activityPage.activityData,
  venueData: state.venuePage.venueData,
  error: state.confirmationPage.error,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.CONF_SCREEN_LOADING }),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ConfirmationScreen));



