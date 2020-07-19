import React, { useState } from 'react';
import './ContactsHeader.css';
import PopupModal from '../PopupModal/PopupModal';
import ContactForm from '../ContactForm/ContactForm';
import {useSelector} from 'react-redux';

const ContactsHeader = () => {

    const [openModal, setOpenModal] = useState(false);
    const numberOfContacts = useSelector(state => state.contactsList.length)

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <>
            <div className="contactsHeaderContainer">
                <div className="contactsHeader">
                    <div className="logoDiv">
                        <div>
                            <h3>Logo</h3>
                        </div>
                    </div>
                    <div className="contactSearchWrap">
                        <div className="contactsOptions">
                            <span className="contactsText">Contacts {numberOfContacts}</span>
                            <button onClick={() => setOpenModal(true)}>
                                +
                        </button>
                        </div>
                        <div className="contactsSearchDiv">
                            <input type="search" name="search" placeholder="Search Users" />
                        </div>
                    </div>
                </div>
            </div>
            {openModal
                ? <PopupModal closeModal={closeModal}>
                    <ContactForm closeModal={closeModal} />
                </PopupModal>
                : null
            }
        </>
    )
}

export default ContactsHeader;