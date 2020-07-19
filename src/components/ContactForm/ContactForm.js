import React, { Component, useState } from 'react';
import './ContactForm.css';
import { useDispatch } from 'react-redux';
import { addNewContact, updateExistingContact } from '../../Actions/actions';

const ContactForm = ({ contactFormObj, closeModal }) => {

    //define state for input elements
    const [state, setState] = useState(() => {
        return contactFormObj ? contactFormObj : {
            name: '',
            designation: '',
            email: '',
            phone: '',
        }
    })

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        })
    }

    const checkErrors = () => {

        const { name, designation, email, phone } = state;

        const errors = {};
        errors.name = !name ? 'Please fill the name' : null;
        errors.designation = !designation ? 'Please fill the designation' : null;
        errors.email = !email ? 'Please fill the email' : null;
        errors.phone = !phone ? 'Please fill the phone' : null;

        if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is not valid";
        }

        console.log(errors);
        setErrors(errors)

        if ((Object.values(errors).some((el) => el !== null))) {
            return false;
        }
        else {
            return true;
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { ...state };
        delete formData.errors;

        if (checkErrors()) {
            if (contactFormObj) {
                //update existing contact
                dispatch(updateExistingContact(state));
                closeModal();
                setState({
                    name: '',
                    designation: '',
                    email: '',
                    phone: '',
                })
                alert('Contact succesfully updated');
            }
            else {
                //add new contact
                dispatch(addNewContact(state));
                closeModal();
                setState({
                    name: '',
                    designation: '',
                    email: '',
                    phone: '',
                })
                alert('Contact succesfully added');
            }

        }
    }

    const { name, designation, email, phone } = state;

    return (
        <div className="formPage">
            <div className="form">
                <form className="contactForm">

                    <div className="inputDiv">
                        <input type="text" name="name" placeholder="Name" value={name}
                            onChange={handleChange} className={errors.name ? 'has-error' : null} />
                        <span className="errorSpan">{errors.name ? errors.name : null}</span>
                    </div>

                    <div className="inputDiv">
                        <input type="text" name="designation" placeholder="Designation" value={designation}
                            onChange={handleChange} className={errors.designation ? 'has-error' : null} />
                        <span className="errorSpan">{errors.designation ? errors.designation : null}</span>
                    </div>

                    <div className="inputDiv">
                        <input type="text" name="email" placeholder="Email" value={email}
                            onChange={handleChange} className={errors.email ? 'has-error' : null} />
                        <span className="errorSpan">{errors.email ? errors.email : null}</span>
                    </div>

                    <div className="inputDiv">
                        <input type="phone" name="phone" placeholder="Phone" value={phone}
                            onChange={handleChange} className={errors.phone ? 'has-error' : null} />
                        <span className="errorSpan">{errors.phone ? errors.phone : null}</span>
                    </div>

                    <button onClick={handleSubmit}>
                        {contactFormObj
                            ? 'Update Contact'
                            : 'Add Contact'
                            }
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ContactForm;