import React from 'react'

export default class ContactCard extends React.Component {
  
  render()
    {
        return (
            <div className="aa"> 
            <input type="checkbox" checked={this.props.ContactCard.status} 
            onChange={()=>this.props.handleChange(this.props.ContactCard.num)}/>
            <h1>{this.props.ContactCard.num}</h1>
            <h1>{this.props.ContactCard.name}</h1>
            <h2>{this.props.ContactCard.place}</h2>
            </div>
        )
    }
    
}
