import React, { useState } from "react";

const ChatComponent = ({ uploading }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const response = await fetch("http://127.0.0.1:8000/get-response/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from the server");
      }

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: data || "Sorry, something went wrong.", //updated from data.response
        },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "Error: Unable to get a response from the server.",
        },
      ]);
    }

    setInput("");
  };

  return (
    <div className="w-full max-w-2xl mt-0 p-8 bg-white rounded-xl shadow-lg border border-gray-200" style={{ height: '500px' }}>
      {uploading ? (
        <>
          <div className="chat-box flex flex-col space-y-4 overflow-y-auto h-5/6 bg-gray-50 p-4 rounded-md max-w-full">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.sender === "bot" ? "bg-rose-300 text-gray-900 self-start" : "bg-slate-300 text-gray-900 self-end"
                } bg-slate-200 p-3 rounded-md max-w-full sm:max-w-xs`}>
                <span className="break-words">{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              className="flex-1 p-2 border border-rose-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 sm:text-base text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 focus:outline-none sm:text-base text-sm"
            >
              Send
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600 text-center">
          Please upload a file to start the chat.
        </p>
      )}
    </div>
  );
};

export default ChatComponent;
