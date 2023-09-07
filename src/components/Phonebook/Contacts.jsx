export const Contacts = ({contact, handDelete}) => {
    return ( 
        <ul>
            {contact.contacts.map((el) => 
            <ul key = {el.id}>
                <li>{el.name}: {el.number}   
                    <button type='button' onClick={()=>handDelete(el.id)}>Delete</button>
                </li>
            </ul>
            )}
        </ul>    
    );
}