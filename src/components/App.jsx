import {FormaPhonebook} from 'components/Phonebook/FormaPhonebook'
import {Contacts} from 'components/Phonebook/Contacts'
import {Filter} from 'components/Phonebook/Filter'
import { nanoid } from "nanoid";
import { Component } from 'react'

const INITIAL_STATE = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    // name: '',
    // number: '',
    // filter: '',
}


export class App extends Component {

  state = {
    ...INITIAL_STATE,
      // contacts: [], 
      // departure: false,
  }


  creatContacts = (body) => {
    this.setState((prev) => ({
            contacts: [
                      ...prev.contacts,
                      {
                        id: nanoid(),
                        ...body,
                      },
            ],
            // departure: true,
        }));    
  }

  handDelete = (id) =>  {
    this.setState((prev) => ({
      contacts: prev.filter((el) => el.id !== id),
    }));
  }

  render() {
    // const { name, number, departure, contacts } = this.state;
    // console.log(`name: ${name}, number: ${number}, departure: ${departure}, contacts: ${contacts}`);
        console.log(this.state)
      return (
          <div>
              <h2>Phonebook</h2>
              <FormaPhonebook creatContacts={this.creatContacts}/>
              <h2>Contacts</h2>
              <Filter formThis={this}/>
              <Contacts contact={this.state} handDelete={this.handDelete}/>
              {/* {this.state.departure ? <Contacts contact={this.state} handDelete={this.handDelete}/> : ""} */}
          </div>
      );
  }
};
