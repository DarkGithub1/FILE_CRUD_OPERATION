import React, { useState } from 'react';

const FileCRUD = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileData, setFileData] = useState('');
  const [operation, setOperation] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const performOperation = () => {
    switch (operation) {
      case 'create':
        createFile();
        break;
      case 'read':
        readFile();
        break;
      case 'update':
        updateFile();
        break;
      case 'delete':
        deleteFile();
        break;
      default:
        break;
    }
  };

  const createFile = () => {
    if (fileName && selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem(fileName, reader.result);
        alert('File created successfully!');
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert('Please provide a file name and select a file.');
    }
  };

  const readFile = () => {
    const fileContent = localStorage.getItem(fileName);
    if (fileContent) {
      setFileData(fileContent);
    } else {
      alert('File not found.');
    }
  };

  const updateFile = () => {
    if (fileName && selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem(fileName, reader.result);
        alert('File updated successfully!');
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert('Please provide a file name and select a file.');
    }
  };

  const deleteFile = () => {
    localStorage.removeItem(fileName);
    setFileName('');
    setFileData('');
    alert('File deleted successfully!');
  };

  return (
    <div className='bg-black h-screen w-screen flex flex-col justify-center items-center gap-3'>
    <h2 className='bg-white font-semibold font-mono w-1/3 text-xl border-8 border-red-500 text-center mb-2'>File Inputting System <br/> CRUD Operation</h2>
      <input type="file" onChange={handleFileChange}  className='w-1/3 bg-white border-red-500 border-8'/>
      <input
        type="text"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        placeholder="File Name"
        className=' border-red-500 border-8 w-1/3'
      />
      <select value={operation} onChange={handleOperationChange} className=' border-red-500 border-8 w-1/3 outline-none'>
        <option value="">Select Operation</option>
        <option value="create">Create</option>
        <option value="read">Read</option>
        <option value="update">Update</option>
        <option value="delete">Delete</option>
      </select>
      <img src={fileData} className='border-red-500 border-8 w-1/3 h-1/3 bg-white object-fill' alt="Uploaded File" /> 
      {/* Display image */}
      <button onClick={performOperation} className='border-red-500 border-8 w-1/3 bg-white h-16 rounded-md text-2xl font-extrabold'>Perform Operation</button>
    </div>
  );
};

export default FileCRUD;
