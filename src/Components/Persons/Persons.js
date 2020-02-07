import React from 'react'
import Person from './Person/Person'

const persons = props => {
    return(props.persons.map(person => <Person
    age={person.age}
    name={person.name}
    key={person.id}
    click={() => props.clicked(person.id) }
    change={(event) => props.changed(event, person.id)} />))
}

export default persons
