import React from 'react';

import FeatherIcon from 'feather-icons-react';

import useAuth from '../hooks/useAuth';
import NavLink from './NavLink';

const ListsNav = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <div>
      <ul className="flex flex-wrap text-xl">
        <NavLink href="/" icon="home" title="Home" />
        <NavLink href="/login/" icon="key" title="Login" />
        <li className="mr-6">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-flex items-center"
          >
            <FeatherIcon className="w-6 h-6 mr-2" icon="key" />
            Toggle Login
          </button>
        </li>
        {isLoggedIn && (
          <>
            <NavLink href="/lists/avn/" icon="key" title="AVN" />
            <NavLink href="/lists/fansly/" icon="key" title="Fansly" />
            <NavLink
              href="/lists/instagram/"
              icon="help-circle"
              title="Instagram"
            />
            <NavLink href="/lists/pornhub/" icon="key" title="Pornhub" />
            <NavLink href="/lists/twitter/" icon="key" title="Twitter" />
          </>
        )}
      </ul>
    </div>
  );
};

export default ListsNav;
