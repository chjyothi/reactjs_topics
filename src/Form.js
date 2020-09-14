import React, { Component } from 'react'

export default class form extends Component {
    constructor(){
        super()
        this.state={
            firstName:"",
             lastName:"",
             age:0,
             isFrindly:true,
             gender:""

        }
        this.handleFunction=this.handleFunction.bind(this)
    }
    handleFunction(event){
        const {name, value,type, checked} = event.target
        type===checked ? this.setState({
            [name]:checked}):
        this.setState({
            [name]:value}
        )

    }
    render(){
          return (
        <div className="Formhandle">
            <form>
                <h1>Type your name here:</h1>
            <input type="text" name="firstName" value={this.state.firstName} placeholder="First name" onChange={this.handleFunction}></input>
                <br></br>
            <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleFunction}></input>
            <br></br>
            <br></br>
            <input type="number" name="age"placeholder="enter your age" value={this.state.age} onchange={this.handleFunction}></input>
            <input type="checkbox" name="isFrindly" checked={this.state.isFriendly}/>Is friendly?
            <label>
                
                    <input type="radio" value="male" name="gender" onChange={this.handleFunction} checked={this.state.gender==="male"}/>male
                    <input type="radio" value="female" name="gender" onChange={this.handleFunction}  checked={this.state.gender==="female"}/>female
              
            </label>
            <label>
                favorite color
                <select>
                    <option>pink</option>
                    <option>blue</option>
                    <option>RED</option>
                    <option>yellow</option>
                </select>
            </label>
          <h2>{this.state.firstName} {this.state.lastName}</h2>
            </form> 
        </div>
    )
    }
   
}
