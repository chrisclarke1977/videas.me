import React, { useContext } from 'react';

import { AuthContext } from '../context/authContext';
import NavLink from './NavLink';

const ListsNav = () => {
  const { user, logout, login } = useContext(AuthContext);

  return (
    <nav className="sticky top-0">
      <ul className="flex flex-wrap text-xl">
        <NavLink href="/" icon="home" title="Home" />
        {user ? (
          <NavLink onClick={logout} href="/logout/" icon="key" title="Logout" />
        ) : (
          <NavLink onClick={login} href="/login/" icon="key" title="Login" />
        )}
        {user && (
          <>
            <NavLink href="/lists/avn/" icon="key" title="AVN" />
            <NavLink href="/lists/fansly/" icon="key" title="Fansly" />
            <NavLink
              href="/lists/instagram/"
              icon="help-circle"
              title="Instagram"
            />
            <NavLink href="/lists/pornhub/" icon="key" title="Pornhub" />
            <NavLink href="/lists/referals/" icon="key" title="referals" />
            <NavLink href="/lists/twitter/" icon="key" title="Twitter" />
          </>
        )}
      </ul>
    </nav>
  );
};

export default ListsNav;
