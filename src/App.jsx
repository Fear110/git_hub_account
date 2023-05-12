import React, { useState } from 'react';
import './App.css';

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

  function setSearchResultsonClick() {
    fetchSearchResults();
  }
  {
    /* <div className="container">
    <input
      type="text"
      placeholder="Enter Your Name"
      value={name}
      onChange={event => setName(event.target.value)}
      onKeyPress={setSearchResults}
    />
  </div> */
  }

  return (
    <div className="container">
      <div className="search-bar-section flex justify-center mt-6 mb-3">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            onChange={event => setName(event.target.value)}
            onKeyPress={setSearchResults}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Name"
            required
          />
          <button
            onClick={setSearchResultsonClick}
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </div>
      <div className="profile-pic-section flex justify-center">
        <img
          className="rounded-full my-3"
          src={data.avatar_url}
        />
      </div>
      <p className="text-3xl font-black text-gray-900 dark:text-white flex justify-center my-3">
        {data.name}
      </p>
      <p className="text-3xl font-black text-gray-900 dark:text-white flex justify-center my-3">
        {data.location}
      </p>
     
    </div>
  );
}
