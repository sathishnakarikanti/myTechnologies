import React from 'react'
import './form.css'
const contactArray = [ ];
    class Formc extends React.Component {
       
       
       
       
        contactArray = [
    {
        name: '',
        email: '',
        phone: ''
      }
    ];
      
      
      
      
      constructor(props) {
        super(props);
        this.state = {
          contacts: contactArray
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const
        { contacts } = this.state,
       
       
        name = this.refs.name.value,
        email = this.refs.email.value,
        phone = this.refs.phone.value;
        this.setState({
          contacts: [...contacts, {
            name,
            email,
            phone
          }]
        }, () => {
          this.refs.name.value = '';
          this.refs.email.value = '';
          this.refs.phone.value = '';
        });
        this.handleEdit=this.handleEdit.bind(this);
      }

      handleEdit(event){
          
      }
    
      render() {
       
        const { contacts } = this.state;
       
        return (   
          <div>
            <h2>Add Someone</h2>
            <form onSubmit={this.handleSubmit}>
              <input type="text" ref="name" placeholder="name" />
              <input type="text" ref="email" placeholder="email" />
              <input type="text" ref="phone" placeholder="phone" />
              <button type="submit">Submit</button>
            </form>
            
            
            
            <table>
              {contacts.map((contact) =>
              <tbody>
                <input type="button" value="edit" onClick={this.handleEdit} />
                  <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                  </tr>
              </tbody>
              )}
            </table>
          
          
          
          </div>
        ) 
      }
    }
    export default Formc