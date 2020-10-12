import React, {Component} from 'react'
import Todo from './Todo'


export default class List extends Component{
   
    render(){
        let list = this.props.tasks.map((ele, ind)=>{
            return <Todo key ={ind} task={ele}/>
        })
        return <div>{list}</div>
    }

}
