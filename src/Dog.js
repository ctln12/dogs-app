import React, { Component } from 'react';
import './Dog.css';

class Dog extends Component {
  render() {
    const {dog, history} = this.props;
    return (
      <div className=" Dog row justify-content-center align align-items-center">
        <div className="col-11 col-lg-5">
          <div className="Dog-card card">
            <img className="card-img-top" src={dog.src} alt={dog.name} />
            <div className="Dog-card-body card-body">
              <h5 className="card-title">{dog.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{dog.age} years old</h6>
            </div>
            <ul className="list-group list-group-flush">
              {dog.facts.map((fact, idx) => (
                <li className="list-group-item" key={idx}>{fact}</li>
              ))}
            </ul>
            <div className="card-body">
              <button className="Dog-button btn btn-dark" onClick={history.goBack}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
