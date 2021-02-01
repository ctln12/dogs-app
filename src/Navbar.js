import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    const {dogs} = this.props;
    return (
      <div className="Navbar">
        <span>Dog Shelter</span>
        <NavLink exact activeClassName="Navbar-active" to="/dogs">Home</NavLink>
        {dogs.map(dog =>
          <NavLink
            exact
            activeClassName="Navbar-active"
            to={`/dogs/${dog.name}`}
            key={dog.name}
          >{dog.name}</NavLink>
        )}
      </div>
    );
  }
}

export default withRouter(Navbar);
