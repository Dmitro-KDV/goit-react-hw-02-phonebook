import {Phonebook} from 'components/Phonebook/Phonebook'
import {Contacts} from 'components/Phonebook/Contacts'
import {Filter} from 'components/Phonebook/Filter'
import { nanoid } from "nanoid";
import { Component } from 'react'

const INITIAL_STATE = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
}


export class App extends Component {

    state = {...INITIAL_STATE, departure: false,}

    handleChange = evt => {
        const { name, value } = evt.target;
        // console.log(`name: ${name}, value: ${value}`);
        this.setState({ [name]: value });
      };
    
      handleSubmit = evt => {
        evt.preventDefault();
        this.setState((prev) => ({
            contacts: [...prev.contacts,
                      {
                        id: nanoid(),
                        name: prev.name, 
                        number: prev.number,
                      },
            ],
            departure: true,
        }));    
      };
    

  render() {
    const { name, number, departure, contacts } = this.state;
    console.log(`name: ${name}, number: ${number}, departure: ${departure}, contacts: ${contacts}`);
        // console.log(this.state.departure)
      return (
          <div>
              <h2>Phonebook</h2>
              <Phonebook formThis={this}/>
              <h2>Contacts</h2>
              <Filter formThis={this}/>
              {this.state.departure ? <Contacts contact={this.state} /> : ""}
          </div>
      );
  }
};
