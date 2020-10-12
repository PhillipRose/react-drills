import React, { Component } from 'react';

import './App.css';

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      movies: [`Lord of the Rings`,`Hunger Games`,`The Hobbit`,`Avengers`,`Harry Potter Series`],
      input: ''
    }
  }

  handleInput(val){
    this.setState({input:val})
  }

  render(){
    let movieList = this.state.movies.filter((ele, ind)=>{
      return ele.includes(this.state.input) 
    })
    .map((ele,ind) =>{
      return <h3 key={ind}>{ele}</h3>
    })


    return(
      <div className='App'>
        <input onChange={e => this.handleInput(e.target.value)} type='text' placeholder='isolate from list'/>
        {movieList}
      </div>
    )
  }
}