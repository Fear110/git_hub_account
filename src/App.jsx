import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

// api = `https://api.github.com/users/fear110`;

export default function App() {
  const [name, setName] = useState('');
  const [data, setdata] = useState('');
  const apiurl = `https://api.github.com/users/${name}`;

  const fetchSearchResults = async () => {
    const resopnse = await fetch(apiurl);
    const data = await resopnse.json();
    setdata(data);
    console.log(data);
  };

  function setSearchResults(event) {
    if (event.key === 'Enter') {
      fetchSearchResults();
    }
  }

  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={event => setName(event.target.value)}
          onKeyPress={setSearchResults}
        />
      </div>
      <p> name is {data.name}</p>
      <p>new name is {name} </p>
    </div>
  );
}
