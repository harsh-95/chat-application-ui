import React from 'react';
import './PopupModal.css';

const PopupModal = ({closeModal, children}) => {
    return (
        <div className="modal-container">
            <section className="modal-main">
                {children}
                <span className="close-modal" onClick={closeModal} ><i className="fa fa-close"></i></span>
            </section>
        </div>
    )
}
export default PopupModal;