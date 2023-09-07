export const Contacts = ({contact, handDelete}) => {
    return ( 
            <li>{contact.name}: {contact.number}
                <button type='button' onClick={()=>handDelete(contact.contacts.id)}>Delete</button>
            </li>
    );
}