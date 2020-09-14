import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard'
import './ContactCard.css'
import  { Contacts }  from './CData'
import Increment from './Increment'
import LoginStatus from './LoginStatus'
import Apifetching from './Apifetching'
import Form from './Form'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      conttact : Contacts
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(num){   
        this.setState(prevState => {
          console.log("calling"+num)
          const UpdatedContacts =prevState.conttact.map(con => {
            if(con.num===num)
            {
              console.log("before"+con.status)
              con.status = !con.status
              console.log( "after"+con.status)
              
            }
            return con
          })
          console.log(UpdatedContacts)
          return {
            conttact: UpdatedContacts
          }
        
        })
  }
  render()
  {
    const ContactComponent = this.state.conttact.map(contacts => <ContactCard key={contacts.num} ContactCard={contacts}
    handleChange={this.handleChange}
    />)
    return (
        <div>
          <Form></Form>
          <Apifetching></Apifetching>
          <div className="loginPage">
          <LoginStatus></LoginStatus>
          </div>
         
         {ContactComponent}
        <h1><Increment></Increment></h1> 
        
        </div>
      )
  }
 
}

export default App;
