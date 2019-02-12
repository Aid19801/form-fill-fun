import React from 'react';
import Input from '@material-ui/core/Input';
import './styles.css';

const UserInput = (props) => {
    return (
        <div className="each-input-container">
            <div className="flex-word-wrap">
                <h4 className="sub-title">{props.subtitle}</h4>
                { props.subtitleSmall ? <p className="sub-title">{props.subtitleSmall}</p> : null }
            </div>

            <div className="each-input">
                <Input name={props.name} onChange={props.handleInputs} placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default UserInput;