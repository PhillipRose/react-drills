import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [`Lord of the Rings`,`Hunger Games`,`The Hobbit`,`Avengers`,`Harry Potter Series`]
    };
  }

  render() {
    let movieList = this.state.movies.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{movieList}</div>;
  }
}

export default App;