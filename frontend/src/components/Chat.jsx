import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading

  const handleSend = async () => {
    if (userInput.trim() === "") return;

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput },
    ]);

    // Clear the input field before making the API call
    setUserInput(""); // This clears the text box

    // Set loading state to true
    setLoading(true);

    // Call the API (replace with actual API call)
    const response = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: userInput }),
    });
    const data = await response.json();

    // Add AI response to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "ai", text: data.answer },
    ]);

    // Set loading state to false
    setLoading(false);
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-md-10 mx-auto">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h5>AI Chatbot</h5>
            </div>
            <div className="card-body" style={{ minHeight: "300px" }}>
              <div className="chat-box">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${
                      message.sender === "user" ? "text-end" : "text-start"
                    }`}
                  >
                    <div
                      className={`badge ${
                        message.sender === "user"
                          ? "bg-info text-dark"
                          : "bg-secondary text-white"
                      } p-2`}
                      style={{
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                        textAlign: "justify", // Justifying the text
                        width: "100%", // Ensure it takes full width for justification
                      }}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only"></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="card-footer">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ask me anything..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  disabled={loading} // Disable the input while loading
                />
                <button
                  className="btn btn-primary"
                  onClick={handleSend}
                  disabled={!userInput.trim() || loading} // Disable the send button while loading
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
