import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUsersAction, loadedMoreUsersAction, loadedUsersAction, loadingUsersAction } from '../actions/users';

import { getUsersPages } from '../helpers/getUsersPages';
import { RootState } from '../store/configureStore';
import Alert from './Alert';
import User from './User';

const UsersSearch: React.FC = () => {
  const [curPage, setCurPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const [alert, setAlert] = useState<boolean>(false);
  const { auth, users, isLoading, total } = useSelector((state: RootState)=> ({
    auth: state.auth,
    users: state.users.users,
    isLoading: state.users.isLoading,
    total: state.users.total
  }));
  const [searchResults, setSearchResults] = useState([]);
  
  async function fetchUsers() {
    try {
      const data = await getUsersPages({ searchTerm: searchTerm || '', page: curPage }).then(res => {
        if(curPage > 0) { 
          dispatch(loadedMoreUsersAction({ users: res.users, total: res.total, message: res.message }));
        } else {
          dispatch(clearUsersAction());
          dispatch(loadedUsersAction({ users: res.users, total: res.total, message: res.message }));
        }
      });
      
      } catch (err) {
        setAlert(true);
    }
  }

  useEffect(() => {
    dispatch(loadingUsersAction());
    fetchUsers();
  }, [searchTerm, curPage]);

  useEffect(()=> {
    setSearchResults(users);
  }, [users])

  function onSearch(e) {
    setSearchTerm(e.target.value);
    setCurPage(0);
  }

  function loadMore() {
    const newPage = curPage + 1;
    setCurPage(newPage);
  }

  function clearUsers() {
    dispatch(clearUsersAction());
  }

  return (
    <>
    {alert && <Alert title="User load error" message="Users did not load correctly" type="ERROR" />}
      <label>
        <span>Search:</span>
        <input name="search" value={searchTerm} onChange={(e) => onSearch(e)} />
      </label>
      <span>
        Results: {(searchResults && searchResults.length) || 0} of {total}
      </span>
      {isLoading && <div>Loading...</div>}
      <ul>
        {searchResults && searchResults.map((item) => (
          <User key={item} {...item} />
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 m-2 rounded inline-flex items-center"
        onClick={() => loadMore()}
      >
        Load More
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 m-2 rounded inline-flex items-center"
        onClick={() => clearUsers()}
      >
        Clear List
      </button>
      <p>
      <span>Page: {curPage}</span>
      <span>Term: {searchTerm}</span>
      {auth && <span>{JSON.stringify(auth)}</span>}
      </p>
      
    </>
  );
};

export default UsersSearch;
