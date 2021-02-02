import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import whiskey from './images/whiskey.jpg';
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';
import Navbar from './Navbar';
import Dogs from './Dogs';
import Dog from './Dog';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  // (reactProps) =>
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
      <div className="App">
        <Navbar dogs={dogs} />
        <Switch>
          <Route exact path="/dogs" render={() => <Dogs dogs={dogs} />} />
          <Route exact path="/dogs/:name" render={findDog} />
        </Switch>
      </div>
    );
  }
}

export default App;
