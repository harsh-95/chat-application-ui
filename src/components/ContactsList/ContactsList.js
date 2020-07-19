import React, { useState, useEffect } from 'react';
import './ContactsList.css';
import { users } from '../../data';
import PopupModal from '../PopupModal/PopupModal';
import ContactForm from '../ContactForm/ContactForm';
import {useSelector, useDispatch} from 'react-redux';
import {selectCurrentContact, deleteContact} from '../../Actions/actions';

const ContactsList = () => {
    // const [contactsList, setContactsList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [editContact, setEditContact] = useState([]);

    const contactsList = useSelector(state => state.contactsList);
    const dispatch  = useDispatch();

    const closeModal = () => {
        setOpenModal(false);
    }

    useEffect(() => {
        //setContactsList(users);
    }, [])

    const editThisContact = (contactId) => {
        console.log(contactId);
        setOpenModal(true);
        getContactToEdit(contactId);
    }

    const deleteThisContact = (contactId) => {
        const res = window.confirm("Are you sure you want to delete this contact ?")

        if(res){
            dispatch(deleteContact(contactId));
        }
        else{

        }
    }

    const getContactToEdit = (contactId) => {
        const filterUser = contactsList.filter(({id}) => id == contactId )
        console.log(filterUser);
        const editUserObj = filterUser[0]
        setEditContact(editUserObj);
    }

    return (
        <>
            <div className="contactsListContainer">
                <div className="contactsListDiv">

                    {contactsList.map(({ name, designation, id }) =>
                        <div key={id} className="contactDiv">
                            <div className="contactIconWrap">
                                <div className={"contactIcon color"+name.substring(0, 1).charCodeAt(0)%5}>
                                    <span>{name.substring(0, 1)}</span>
                                </div>
                            </div>
                            <div className="contactInfo" onClick={() => dispatch(selectCurrentContact(id))}>
                                <span className="contactName">{name}</span>
                                <span className="contactDesignation">{designation}</span>
                            </div>
                            <div className="contactOptions">
                                <span className="contactEdit">
                                    <i className="fa fa-pencil" onClick={() => editThisContact(id)} aria-hidden="true"></i>
                                </span>
                                <span className="contactDelete">
                                    <i className="fa fa-trash" onClick={() => deleteThisContact(id)} aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            {openModal
                ? <PopupModal closeModal={closeModal}>
                    <ContactForm contactFormObj={editContact} closeModal={closeModal}  />
                </PopupModal>
                : null
            }
        </>
    )
}

export default ContactsList;