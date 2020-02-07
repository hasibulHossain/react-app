import React, { Component } from 'react';
import './App.css';
import uuidV4 from 'uuid/v4';

import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../HOC/Aux'
import withClass from '../HOC/withClass'

class App extends Component {
  state = {
    persons: [
      {name: 'hasib', age: "21", id: uuidV4()},
      {name: 'john', age: 23, id: uuidV4()},
      {name: 'clancy', age: 33, id: uuidV4()}
    ],
    showPerson: false,
    toggleCount: 0
  }

  changeNameHandler = (event, id) => {
    const personsLocal = [...this.state.persons]
    const person = personsLocal.find(person => person.id === id)
    person.name = event.target.value
    this.setState({persons: personsLocal})
  }

  toggleHandler = () => {
    const switcher = this.state.showPerson
    this.setState((prevState, props) => {
      return {
        showPerson: !switcher,
        toggleCount: prevState.toggleCount + 1
      }
    })
  }

  deletePersonHandler = id => {
    console.log(id)
    const persons = [...this.state.persons]
    const personIndex = this.state.persons.findIndex(person => person.id === id)
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    let persons;
    if(this.state.showPerson) {
      persons = ( <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler} /> );
    }
    
    return (
      <Aux>
        <Cockpit
        showPerson={this.state.showPerson}
        persons={this.state.persons}
        onClicked={this.toggleHandler} />
        {persons}
      </Aux>
    );
  }
}
const enhancedComponent = withClass(App, 'App')

export default enhancedComponent;