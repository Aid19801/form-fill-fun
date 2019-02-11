import React, { Component } from 'react'
import './styles.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">

        <div className="content-card">
          <div className="header">header</div>
          <div className="main-body">
            <h1 className="title">About Your Activity</h1>
          </div>
        </div>

        <div className="footer">footer</div>
      </div>
    )
  }
}

export default HomePage;
