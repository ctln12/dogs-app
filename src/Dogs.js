import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dogs.css';

class Dogs extends Component {
  render() {
    const {dogs} = this.props;
    return (
      <div className="Dogs">
        <h1 className="display-3 text-center my-4">Choose a Dog!</h1>
        <div className="Dogs-list text-center">
          <div className="row">
            {dogs.map(dog => (
              <div className="Dogs-dog col-md-6 col-lg-4" key={dog.name}>
                <img src={dog.src} alt={dog.name} />
                <h3>
                  <Link className="underline" to={`/dogs/${dog.name}`}>
                    {dog.name}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Dogs;
