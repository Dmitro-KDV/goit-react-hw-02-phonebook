export const Contacts = ({contact}) => {
    return ( 
            <li>{contact.name}: {contact.number}
                <button type='button'>Delete</button>
            </li>
    );
}