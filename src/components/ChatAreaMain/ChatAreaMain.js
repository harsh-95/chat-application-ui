import React from 'react';
import './ChatAreaMain.css';
import ChatProfile from '../ChatProfile/ChatProfile';
import ChatArea from '../ChatArea/ChatArea';
import MessageInput from '../MessageInput/MessageInput';

const ChatAreaMain = () => {

    return (
        <div className="chatAreaMainContainer">
            <div className="chatAreaMainDiv">
                <ChatProfile />
                <ChatArea />
                <MessageInput />
            </div>
        </div>
    )
}

export default ChatAreaMain;