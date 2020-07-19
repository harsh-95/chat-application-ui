import React from 'react';
import './ChatProfile.css';
import {useSelector} from 'react-redux';
import { users } from '../../data';

const ChatProfile = () => {

    const contactsList = useSelector(state => state.contactsList);
    const currentUserId = useSelector(state => state.currentUserId);

    const filterUser = contactsList.filter(({id}) => id == currentUserId);
    console.log('abcanc', filterUser);
    const {name, email} = filterUser[0];

    return (
        <div className="chatProfileConatiner">
            <div className="">
                <div className="chatProfileDiv">
                    <div className="chatProfileIconWrap">
                        <div className={"chatProfileIcon color"+name.substring(0, 1).charCodeAt(0)%5}>
                            <span>{name.substring(0,1)}</span>
                        </div>
                    </div>
                    <div className="chatProfileInfo">
                        <span className="chatProfileName">{name}</span>
                        <span className="chatProfileEmail">{email}</span>
                        <div className="chatProfileOptions">
                            <button><i className="fa fa-commenting-o" aria-hidden="true"></i> chat</button>
                            <button>★</button>
                            <button>...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatProfile;