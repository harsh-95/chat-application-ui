import React, { useState, useEffect } from 'react';
import './ChatMessagesList.css';
import {useSelector} from 'react-redux';

const ChatMessagesList = () => {

    const contactsList = useSelector(state => state.contactsList);
    const messagesList = useSelector(state => state.messagesList);
    const currentUserId = useSelector(state => state.currentUserId);

    useEffect(() => {
        console.log('useEffect');
        //getUserMessages(currentUserId);
    }, [])

    const filterContact = contactsList.filter(({ id }) => id == currentUserId);
    const contactName = filterContact[0].name;

    const filterUserMessages = messagesList.filter(({ id }) => id == currentUserId);
    const currentUserMessages = filterUserMessages[0].messages;

    return (
        <div className="ChatMessagesListContainer">
            <div className="ChatMessagesListDiv">



                {currentUserMessages.map(({ label, text, time }, i) =>
                    <>
                        {label == "received"
                            ? <div key={i} className="messageContainer justifyStart">
                                <div className="chatMessageIconWrap">
                                    <div className={"chatMessageIcon color"+contactName.substring(0, 1).charCodeAt(0)%5}>
                                        <span>{contactName.substring(0,1)}</span>
                                    </div>
                                </div>

                                <div className="messageBox backgroundLight">
                                    <p className="messageText colorDark">{text}</p>
                                </div>
                                <p className="sentText pl-10">{new Date(time).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}</p>
                            </div>
                            : <div key={i} className="messageContainer justifyEnd">
                                <p className="sentText pr-10">{new Date(time).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}</p>
                                <div className="messageBox backgroundBlue">
                                    <p className="messageText colorWhite">{text}</p>
                                </div>
                                <div className="chatMessageIconWrap">
                                    <div className="chatMessageIcon color4">
                                        <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                            </div>
                        }

                    </>

                )

                }



                {/* <div className="messageContainer justifyStart">
                    <div className="chatMessageIconWrap">
                        <div className="chatMessageIcon">
                            <span>R</span>
                        </div>
                    </div>

                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">Hi</p>
                    </div>
                    <p className="sentText pl-10">10:02</p>
                </div>



                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">10:03</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">How's you? How's you? How's you? How's you? How's you? How's you? How's you?</p>
                    </div>
                    <div className="chatMessageIconWrap">
                        <div className="chatMessageIcon">
                            <span>R</span>
                        </div>
                    </div>
                </div>

                <div className="messageContainer justifyStart">
                    <div className="chatMessageIconWrap">
                        <div className="chatMessageIcon">
                            <span>R</span>
                        </div>
                    </div>
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">I am fine. Thanks I am fine. Thanks I am fine. Thanks I am fine. Thanks I am fine. Thanks</p>
                    </div>
                    <p className="sentText pl-10">10:05</p>
                </div> */}

            </div>
        </div>
    )
}

export default ChatMessagesList;