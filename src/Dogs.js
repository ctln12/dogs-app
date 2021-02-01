import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dogs.css';

class Dogs extends Component {
  render() {
    const {dogs} = this.props;
    return (
      <div className="Dogs">
        <h1>Choose a Dog!</h1>
        <div className="Dogs-list">
          {dogs.map(dog => (
            <div className="Dogs-dog">
              <img src="https://images.unsplash.com/photo-1566756578171-cbf0bcadd71b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" alt={dog.name} />
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
