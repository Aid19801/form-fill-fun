import React from 'react';
import logo from './logo.png';

import './styles.css';

const Header = props => {
    return (
        <div className="header">
            <img className="header-img" src={require('./logo.png')} width={220} height={80} alt="logo" />
        </div>
    )
}

export default Header;