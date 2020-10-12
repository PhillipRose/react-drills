import React, { Component } from 'react';
import Todo from './Components/Todo'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      input: `` 
    }
  }

  handleInput=(val)=>{
    this.setState({input:val})
  }
  
  addTask = () =>{
    this.setState({
      list : [...this.state.list, this.state.input],
      input: ``
    })
  }

  render(){
    let list =this.state.list.map((ele, ind)=>{
      return <Todo key ={ind} task={ele}/>
    })
  return (
    <div className="App">
      <h1>What a lot of things to do</h1>
      <div>
        <input value={this.state.input} placeholder ='Add to tasks' onChange ={(e)=>this.handleInput(e.target.value)}/>

        <button onClick={this.addTask}>Add</button>
      </div>
      <br/>
        {list}
    </div>
  );
  }
}

export default App;
