
import './App.css'
import ChatComponent from './components/ChatComponent'
import FileUpload from './components/FileUpload'

function App() {

  return (
    <div className="m-5 p-2 min-h-screen bg-gray-100 flex  flex-row items-center justify-around">
      <FileUpload />
      <ChatComponent/>
    </div>
  )
}

export default App
