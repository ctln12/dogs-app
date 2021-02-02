import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dogs from './Dogs';
import Dog from './Dog';

class Routes extends Component {
  render() {
    const {dogs} = this.props;
    const findDog = (props) => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <Dog {...props} dog={currentDog} />;
    }
    return (
      <Switch>
        <Route exact path="/dogs" render={() => <Dogs dogs={dogs} />} />
        <Route exact path="/dogs/:name" render={findDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;
