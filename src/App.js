// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import UploadForm from './components/UploadForm';
import DataTable from './components/DataTable';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const handleLogin = (username) => {
    // Check username/password and set loggedIn state
    setLoggedIn(true);
  };

  const handleUpload = (item) => {
    setData([...data, item]);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          <UploadForm handleUpload={handleUpload} />
          <DataTable data={data} />
        </>
      )}
    </div>
  );
}

export default App;
