import React, { useState } from 'react';
import './ChatComponent.css'; 

const ChatComponent = ({uploading}) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() === '') return; 
  
    setMessages([...messages, { sender: 'user', text: input }]);
  
    try {
      const response = await fetch('http://127.0.0.1:8000/get-response/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ query: input }), 
      });
  
      if (!response.ok) {
        throw new Error('Failed to get response from the server');
      }
  
      const data = await response.json();
  
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: data.response || 'Sorry, something went wrong.' },
      ]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Error: Unable to get a response from the server.' },
      ]);
    }
  
    setInput(''); 
  };
  

  return (
    <div className="chat-container items-centre rounded-xl shadow-lg border border-gray-200">
      {uploading &&<> 
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div></> }
    {!uploading && <div className=' flex flex-row items-center justify-center'>
        <p className='mt-20'>Please Upload a file First.</p></div>}
    </div>
  );
};

export default ChatComponent;
