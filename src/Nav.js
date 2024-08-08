import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/news/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/news/India" className="flex title-font font-medium items-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">News</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600 flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 transition duration-300" to="/news/India">India</Link>
          <Link className="mr-5 transition duration-300" to="/news/Business">Business</Link>
          <Link className="mr-5 transition duration-300" to="/news/Politics">Politics</Link>
          <Link className="mr-5 transition duration-300" to="/news/Entertainment">Entertainment</Link>
          <Link className="mr-5 transition duration-300" to="/news/Sports">Sports</Link>
          <Link className="mr-5 transition duration-300" to="/news/Technology">Technology</Link>
        </nav>
        <div className="flex flex-col md:flex-row items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-base px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition duration-300"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md transition duration-300 hover:bg-indigo-600"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
