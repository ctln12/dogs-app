import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const {dogs} = this.props;
    const dogLinks = dogs.map(dog => (
      <li className="nav-item" key={dog.name}>
        <NavLink exact className="nav-link" to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="Navbar navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dogs">
          Dog Shelter
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dogs">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
