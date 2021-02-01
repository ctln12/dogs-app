import React, { Component } from 'react';
import './Dog.css';

class Dog extends Component {
  findDog(name){
    const dog = this.props.dogs.find(dog => dog.name === name);
    return dog;
  }
  render() {
    const {match, history} = this.props;
    const dog = this.findDog(match.params.name);
    return (
      <div className="Dog">
        <div className="Dog-card">
          <img src="https://images.unsplash.com/photo-1566756578171-cbf0bcadd71b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" alt={dog.name} />
          <div className="Dog-card-body">
            <div className="Dog-details">
              <h1>{dog.name}</h1>
              <p>{dog.age} years old</p>
            </div>
            <div className="Dog-facts">
              {dog.facts.map((fact, idx) => <p key={idx}>{fact}</p>)}
            </div>
            <button className="Dog-button" onClick={history.goBack}>Go Back</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
