import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dogs from './Dogs';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "whiskey.jpg",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: "hazel.jpg",
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "tubby.jpg",
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    const {dogs} = this.props;
    return (
      <div className="App">
        <Route path="/dogs" render={() => <Dogs dogs={dogs} />} />
      </div>
    );
  }
}

export default App;