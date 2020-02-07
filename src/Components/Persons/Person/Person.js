import React from 'react'
import propTypes from 'prop-types'
import './person.css'
import Aux from '../../../HOC/Aux'
import withClass from '../../../HOC/withClass'

const Person = props => {
    return(
        <Aux>
            <p onClick={props.click}>I'm {props.age} years now. My name is {props.name} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            <button>tip dao</button>
        </Aux>
    )
}
Person.propTypes = {
    click: propTypes.func,
    age: propTypes.number,
    name: propTypes.string,
    change: propTypes.func
}
const enhancedComponent = withClass(Person, 'person')

export {enhancedComponent as default};