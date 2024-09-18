import { useState } from "react";
import "./App.css";
import ChatComponent from "./components/ChatComponent";
import FileUpload from "./components/FileUpload";

function App() {
  const [uploadedFile, setUpload] = useState(false);
  return (
    <div className="mx-10 p-2 min-h-screen bg-gray-700 flex flex-col lg:flex-row items-center justify-around space-y-4 lg:space-y-0 lg:space-x-4">
      <FileUpload handalupdating={setUpload} />
      {uploadedFile ? (
        <ChatComponent uploading={uploadedFile} />
      ) : (
        <div
          className="w-full max-w-2xl mt-0 p-8 bg-white rounded-xl shadow-lg border border-gray-200"
          style={{ height: "500px" }}
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600 text-center">
              Please upload a file to start the chat.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
