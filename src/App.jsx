import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

// api = `https://api.github.com/users/fear110`;

export default function App() {
  const [data, setdata] = useState('');
  const apiurl = `https://api.github.com/users/fear110`;

  useEffect(() => {
    const fetchData = async () => {
      const resopnse = await fetch(apiurl);
      const data = await resopnse.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p> name is {data.name}</p>
    </div>
  );
}
