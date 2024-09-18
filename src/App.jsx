
import { useState } from 'react';
import './App.css'
import ChatComponent from './components/ChatComponent'
import FileUpload from './components/FileUpload'

function App() {
  const[uploaded_file,setUpload] = useState(false);
  return (
    <div className="mx-10 p-2 min-h-screen bg-gray-700 flex flex-col lg:flex-row items-center justify-around space-y-4 lg:space-y-0 lg:space-x-4">
      <FileUpload  handalupdating={setUpload} />
      <ChatComponent uploading={uploaded_file}/>
    </div>
  )
}

export default App
