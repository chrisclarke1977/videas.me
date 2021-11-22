import React, { useEffect, useState } from 'react';

import { getUsersPages } from '../helpers/getUsersPages';
import User from './User';

const UsersSearch: React.FC = () => {
  const [curPage, setCurPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

  function onSearch(e) {
    setSearchTerm(e.target.value);
    setCurPage(0);
    setIsLoading(true);
    getUsersPages({ searchTerm: searchTerm || '', page: 0 }).then((data) => {
      setIsLoading(false);
      setSearchResults(data.users);
      setTotal(data.total);
    });
  }

  function load() {
    setIsLoading(true);
    getUsersPages({ searchTerm: searchTerm || '', page: curPage }).then(
      (data) => {
        setIsLoading(false);
        setSearchResults(data.users);
        setTotal(data.total);
      }
    );
  }

  function loadMore() {
    const newPage = curPage + 1;
    setCurPage(newPage);
    setIsLoading(true);
    getUsersPages({ searchTerm: searchTerm || '', page: newPage }).then(
      (data) => {
        setIsLoading(false);
        setSearchResults(searchResults.concat(data.users));
        setTotal(data.total);
      }
    );
  }

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <label>
        <span>Search:</span>
        <input name="search" value={searchTerm} onChange={(e) => onSearch(e)} />
      </label>
      <span>
        Results: {searchResults.length} of {total}
      </span>
      {isLoading && <div>Loading...</div>}
      <ul>
        {searchResults.map((item) => (
          <User key={item} {...item} />
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-flex items-center"
        onClick={() => loadMore()}
      >
        Load More
      </button>
    </>
  );
};

export default UsersSearch;
