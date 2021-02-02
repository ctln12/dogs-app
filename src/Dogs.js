import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dogs.css';

class Dogs extends Component {
  render() {
    const {dogs} = this.props;
    return (
      <div className="Dogs">
        <h1 className="display-2 text-center">Choose a Dog!</h1>
        <div className="Dogs-list">
          <div className="container text-center">
            <div className="row">
              {dogs.map(dog => (
                <div className="Dogs-dog col-md-6 col-lg-4" key={dog.name}>
                  <img src={dog.src} alt={dog.name} />
                  <Link to={`/dogs/${dog.name}`}>
                    <p>{dog.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dogs;
