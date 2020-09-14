import React from 'react'
import { render } from 'react-dom'

export default class LoginStatus extends React.Component {
    constructor(){
        super()
        this.state={
            login_status:false,
            display:false
        }
        this.loginFunction = this.loginFunction.bind(this)
        this.logoutFunction= this.logoutFunction.bind(this)
        
    }
     loginFunction(){
        this.setState(prevState =>
            {
                return {
                    login_status:true
                    
                }
            })
      
      
    }
     logoutFunction(){
        this.setState(prevState=>{
        return {
            login_status: false
        }
    })
    }

    // componentDidMount(){
    //     setTimeout(prevState=>{
    //         this.setState={
    //             display: true
    //         }
    //     },3000)
            
        
    // }
render()
{
    return (
        <div>
            {this.state.display==false?
              <p> 
                 {this.state.login_status == true ?
                    <h1>Logged In</h1> :
                
                    <h1>Logged Out</h1>
                 }
              </p>: <h1>Loading...........</h1>
             }
               
            <button onClick={this.loginFunction}>LogIn</button>
            <button onClick={this.logoutFunction}>Logout</button>
        </div>
    )
}
   
}
