
import React from 'react'

export default class Increment extends React.Component {
   
    constructor(){
        super()
        this.state={
            count: 1
        }
        this.increm = this.increm.bind(this)
        this.decrem = this.decrem.bind(this)
    }
    increm(){
        this.setState(prevState =>{
            return {
                count:prevState.count+1
            }
        }
            )
    }
    decrem(){
        this.setState(prevState =>{
            return {
                count: prevState.count-1
            }
        })
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increm}>increment!</button>
                <button onClick={this.decrem}>decrement!</button>
                
            </div>
        )
    }
   
}

