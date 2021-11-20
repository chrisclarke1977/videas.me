import React, { useState } from 'react';

const SearchArray = ({ array }) => {
  const [searchField, setSearchField] = useState<string>('');

  function onSearch(e) {
    setSearchField(e.target.value);
  }

  return (
    <>
      <label>
        <span>Search:</span>
        <input
          name="search"
          value={searchField}
          onChange={(e) => onSearch(e)}
        />
      </label>
      <ul>
        {array
          .sort()
          .filter((item) => item.indexOf(searchField) !== -1)
          .map((handle) => (
            <li key={handle}>
              <a href={handle}>{handle}</a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SearchArray;
