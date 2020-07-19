import React from 'react';
import './SidebarContacts.css';
import ContactsHeader from '../ContactsHeader/ContactsHeader';
import ContactsList from '../ContactsList/ContactsList';

const SidebarContacts = () => {

    return (
        <div className="sidebarContactsContainer">
            <div>
                <ContactsHeader />
                <ContactsList />
            </div>
        </div>
    )
}

export default SidebarContacts;