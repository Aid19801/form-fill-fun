import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './styles.css';

const Footer = props => {
    return (
        <div className="footer">
          <Button variant="contained" onClick={null}>
            <Link to='/'>
              Back
            </Link>
          </Button>

          <Button variant="contained" onClick={this.saveActivityData}>
            <Link to='/confirmation'>
              Next
            </Link>
          </Button>
        </div>
    )
}

export default Footer;