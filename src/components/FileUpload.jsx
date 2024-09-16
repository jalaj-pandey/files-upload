// src/components/FileUpload.jsx
import React, { useState } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'; // Updated import for Heroicons v2

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
    setUploadProgress(0);
  };

  // Handle drag and drop
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(Array.from(event.dataTransfer.files));
    setUploadProgress(0);
  };

  // Handle file upload (mock upload process)
  const handleUpload = () => {
    if (files.length === 0) {
      alert('Please select files to upload');
      return;
    }

    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);
        setIsUploading(false);
      }
      setUploadProgress(progress);
    }, 500);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Drag and Drop Area */}
      <div
        className="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition-all duration-300"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="text-center">
          <CloudArrowUpIcon className="w-12 h-12 mx-auto text-blue-400 mb-2" />
          <p className="text-gray-600">Drag & Drop files here or click to select</p>
        </div>
      </div>

      {/* File Preview Area */}
      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="text-gray-700 font-medium mb-2">Selected Files</h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">
                    <CloudArrowUpIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <span className="text-gray-700 text-sm truncate">{file.name}</span>
                </div>
                <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={isUploading}
        className={`w-full mt-6 py-3 rounded-md text-white transition-all duration-300 ${
          isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        } focus:outline-none focus:ring-2 focus:ring-blue-300`}
      >
        {isUploading ? 'Uploading...' : 'Upload Files'}
      </button>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            style={{ width: `${uploadProgress}%` }}
            className={`absolute top-0 left-0 h-full ${uploadProgress === 100 ? 'bg-green-500' : 'bg-blue-500'} transition-all duration-500`}
          ></div>
        </div>
        <p className="text-center mt-2 text-sm text-gray-600">{uploadProgress}%</p>
      </div>
    </div>
  );
};

export default FileUpload;
