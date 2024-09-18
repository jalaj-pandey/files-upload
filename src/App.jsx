
import { useState } from 'react';
import './App.css'
import ChatComponent from './components/ChatComponent'
import FileUpload from './components/FileUpload'

function App() {
  const[uploaded_file,setUpload] = useState(false);
  return (
    <div className="m-5 p-2 min-h-screen bg-gray-100 flex  flex-row items-center justify-around">
      <FileUpload  handalupdating={setUpload} />
      <ChatComponent uploading={uploaded_file}/>
    </div>
  )
}

export default App
