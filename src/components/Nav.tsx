import React, { useContext } from 'react';

import FeatherIcon from 'feather-icons-react';

import { AuthContext } from '../context/authContext';
import NavLink from './NavLink';

const Nav = () => {
  const { user, logout, login } = useContext(AuthContext);

  return (
    <div>
      <ul className="flex flex-wrap text-xl">
        <NavLink href="/" icon="home" title="Home" />
        <NavLink href="/faq/" icon="help-circle" title="FAQs" />
        <NavLink href="/contact/" icon="mail" title="Contact Us" />
        <NavLink href="/about/" icon="help-circle" title="About" />
        <NavLink href="/plans/" icon="dollar-sign" title="Plans" />
        <li className="mr-6">
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-flex items-center"
            href="https://github.com/chrisclarke1977/videas.me"
          >
            <FeatherIcon className="w-6 h-6 mr-2" icon="github" />
            GitHub
          </a>
        </li>
        {user ? (
          <NavLink onClick={logout} href="/logout/" icon="key" title="Logout" />
        ) : (
          <NavLink onClick={login} href="/login/" icon="key" title="Login" />
        )}
      </ul>
    </div>
  );
};

export default Nav;
