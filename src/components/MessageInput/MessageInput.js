import React, { useState } from 'react';
import './MessageInput.css';
import { useDispatch } from 'react-redux';
import { sendInputMessage } from '../../Actions/actions';

const MessageInput = () => {

    const [textMessage, setTextMessage] = useState("");
    const dispatch = useDispatch();

    const sendTextMessage = () => {
        dispatch(sendInputMessage(textMessage));
        setTextMessage("");
    }

    return (
        <div className="messageInputContainer">
            <div className="messageInputWrap">
                <div className="messageInputDiv">
                    <input
                        type="text"
                        name="message"
                        className="messageInput"
                        placeholder="Start typing ... "
                        value={textMessage}
                        onChange={(e) => setTextMessage(e.target.value)}
                        onKeyDown={(e) => e.key == "Enter" && textMessage.trim().length ? sendTextMessage() : null } />
                </div>
                <div className="messageAttachments">
                    <i className="fa fa-paperclip" aria-hidden="true"></i>
                </div>
                <div className="messageEmojis">
                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                </div>
                <div className="messageSendButtonDiv">
                    <button className="messageSendButton" onClick={textMessage.trim().length ? sendTextMessage : null}>
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MessageInput;