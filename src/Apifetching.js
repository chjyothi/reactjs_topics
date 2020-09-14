import React, { Component } from 'react'

export default class Apifetching extends Component {
    constructor()
    {
        super()
        this.state={
            character:{}
         }
    }
    componentDidMount(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response =>response.json())
        .then((data)=>console.log(data+"data from API"))
        .catch(error => console.log('Authorization failed : ' + error.message));
        console.log("API calling")
            
    }
        
    
    render(){
        return (
            <div>
                This is Api fetching page
                {this.state.character.name}
            </div>
        )
    }
   
}
