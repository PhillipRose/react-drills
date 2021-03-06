import React, {Component} from 'react'

export default class Loginbar extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            password: ''
        }
    }
    inputName(user){
        this.setState({name: user})
    }

    inputPassword(pass){
        this.setState({password: pass})
    }
    loggedIn =() => {
        alert(`User: ${this.state.name} created with password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
        <input className='user' placeholder= 'User name' onChange ={event => this.inputName(event.target.value)} />
        <input className='pass' placeholder = 'Password' onChange = {event => this.inputPassword(event.target.value)}/>
        <button onClick={this.loggedIn}>Login</button>
            </div>
        )
    
    }
}
