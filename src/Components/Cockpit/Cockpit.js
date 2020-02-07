import React from 'react';
import './cockpit.css';
import Aux from '../../HOC/Aux'

const cockpit = props => {
    let left_message;
    let expandOrCompact;
    let classes = [];
    let btnClass = ['buttons'];

    if(props.showPerson) {
        left_message = (<span>Persons box left: {props.persons.length}</span>);
        expandOrCompact = (<span>Compact</span>);
        btnClass.push('red')
    } else {
        expandOrCompact = (<span>Expand</span>)
    }

    if(props.persons.length <= 2) {
        classes.push('crimson')
    }

    if(props.persons.length <= 1) {
    classes.push('bold')
    }

    return(
        <Aux>
            <h2>Hallo world!</h2>
            <p className={classes.join(' ')}>{left_message}</p>
            <button
            className={btnClass.join(' ')}           
            onClick={props.onClicked}> {expandOrCompact}
            </button>
        </Aux>
    )
}

export default cockpit;