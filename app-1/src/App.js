import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      message: ''
    }
  }

  handleChange(val){
    this.setState({message:val})
  }

  render(){

    return (
      <div className="App">
      <input className ='textbox' onChange={e => this.handleChange(e.target.value)} type = 'text' placeholder='this is a text box'/>
    <p>{this.state.message}</p>
    </div>
  );
}
}


