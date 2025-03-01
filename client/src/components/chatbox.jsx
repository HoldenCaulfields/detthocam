import React from "react";

const ChatBox = ({ messages }) => {
    return (
        <div className="chat-box">
        {messages.map((message, index) => (
            <div key={index} className="message">
            <span className="message-username">{message.username}</span>
            <span className="message-text">{message.text}</span>
            </div>
        ))}
        </div>
    );
};

export default ChatBox;