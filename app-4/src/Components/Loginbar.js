import React, {Component} from 'react'

export default class Loginbar extends Component{
    

    render(){
        return(
            <div>
        <input className='user' placeholder= 'User name' />
        <input className='pass' placeholder = 'Password'/>
        <button>Login</button>
            </div>
        )
    
    }
}
