import React, { useState } from 'react';

import { chunks } from '../utils/chunks';

interface SearchCardProps {
  array: any[];
  Render: any;
}

const SEARCH_PAGE_COUNT: number = 3;

const SearchCard: React.FC<SearchCardProps> = ({ array, Render }) => {
  const [searchField, setSearchField] = useState<string>('');
  const [searchPages, setSearchPages] = useState(array);
  const [searchResults, setSearchResults] = useState(
    chunks(searchPages, SEARCH_PAGE_COUNT).next().value
  );

  function onSearch(e) {
    setSearchField(e.target.value);
    setSearchPages(
      array
        .sort()
        .filter(
          (item) =>
            JSON.stringify(item).indexOf(searchField.toLowerCase()) !== -1
        )
    );
    setSearchResults(chunks(searchPages, SEARCH_PAGE_COUNT).next().value);
  }

  function loadMore() {
    const more = searchResults.concat(
      chunks(searchPages, SEARCH_PAGE_COUNT).next().value
    );
    setSearchResults(more);
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
      <span>
        Results: {searchResults.length} of {searchPages.length}
      </span>
      <ul>
        {searchResults.map((item) => (
          <Render key={item} {...item} />
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

export default SearchCard;
