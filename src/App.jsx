import { useState } from "react";
import "./App.css";
import ChatComponent from "./components/ChatComponent";
import FileUpload from "./components/FileUpload";
import icon from "./assets/icon.png";
import icon1 from "./assets/1.svg";
import icon2 from "./assets/2.svg";
import icon3 from "./assets/3.svg";
import ques from "./assets/info.png";
import icon5 from "./assets/5.svg";
import icon6 from "./assets/6.svg";

function App() {
  const [uploadedFile, setUpload] = useState(false);
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4 relative">
      <div className="absolute top-5 lg:top-4 left-12 sm:left-16 md:left-96 transform -translate-x-1/2 z-10">
        <a
          href="https://thejalaj.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icon}
            alt="icon"
            className="w-16 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </a>
      </div>
    
      <h2 className="text-xl  text-white sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-6 mt-2 text-center px-2 z-10 relative">
        Financial Document Analysis
      </h2>
      <div className="absolute bottom-4 w-2/3 z-10 flex justify-between items-center px-8">
        <img
          src={icon1}
          alt="Icon 1"
          className="hidden xl:block w-8 h-8  sm:w-12 sm:h-12 md:w-16 md:h-16 absolute left-8 bottom-7"
        />

        <img
          src={icon6}
          alt="Icon 1"
          className="hidden xl:block w-8 h-8  sm:w-12 sm:h-12 md:w-16 md:h-16 absolute left-2 bottom-72"
        />

        <img
          src={icon2}
          alt="Icon 2"
          className="hidden xl:block w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 absolute right-1/2 bottom-0"
        />

        <img
          src={icon3}
          alt="Icon 3"
          className="hidden xl:block w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 absolute right-4 bottom-96"
        />

        <img
          src={icon5}
          alt="Icon 3"
          className="hidden xl:block w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 absolute right-7 sm:right-10 md:right-7 bottom-8 sm:bottom-36 md:bottom-8"
        />
      </div>

      <div className="relative backdrop-blur-lg bg-white/50 p-10 rounded-xl shadow-lg w-full max-w-4xl space-y-6 lg:space-y-0 lg:space-x-6 flex flex-col lg:flex-row items-center justify-between z-0">
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
    </div>

     <div className=" backdrop-blur-lg bg-white/96 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <img
        src={ques}
        alt="About Us Icon"
        className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 md:mb-0 md:mr-6"
      />
      <div>
        <p className="text-gray-800">
          The Financial Document Analyzer streamlines the extraction of key data
          from unstructured financial documents, such as company annual reports.
          Simply upload your documents, and our tool will automatically process
          them using advanced AI models to generate structured data. You can then
          query the document, allowing you to easily search for specific details
          and insights.
        </p>
      </div>
    </div>
    </>
  );
}

export default App;
