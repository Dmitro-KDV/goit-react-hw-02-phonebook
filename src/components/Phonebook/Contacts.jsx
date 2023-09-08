import {contactList, btnDelete} from './Phonebook.stiled';

export const Contacts = ({contact, handDelete}) => {
    return ( 
        <contactList>
            {(contact.filter ?? contact.contacts).map((el) => 
            <ul key = {el.id}>
                <li>{el.name}: {el.number}   
                    <btnDelete type='button' onClick={()=>handDelete(el.id)}>Delete</btnDelete>
                </li>
            </ul>
            )}
        </contactList>    
    );
}