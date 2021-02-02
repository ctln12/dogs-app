import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dogs.css';

class Dogs extends Component {
  render() {
    const {dogs} = this.props;
    return (
      <div className="Dogs">
        <h1 className="display-1 text-center">Choose a Dog!</h1>
        <div className="Dogs-list">
          {dogs.map(dog => (
            <div className="Dogs-dog" key={dog.name}>
              <img src={dog.src} alt={dog.name} />
              <Link to={`/dogs/${dog.name}`}>
                <p>{dog.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dogs;
