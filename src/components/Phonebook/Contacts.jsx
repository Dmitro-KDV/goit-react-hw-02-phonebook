export const Contacts = ({contact}) => {
    return ( 
            <li>{contact.name}: {contact.number}
                <button type='button' onClick={()=>handDelete(contact.contacts.id)}>Delete</button>
            </li>
    );
}