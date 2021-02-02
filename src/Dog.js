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
          <img src={dog.src} alt={dog.name} />
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
