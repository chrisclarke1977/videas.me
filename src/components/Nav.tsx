import React from 'react';

import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';

const NavLink = ({ href, icon, title }) => {
  return (
    <li className="mr-6">
      <Link href={href}>
        <a className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-flex items-center">
          <FeatherIcon className="w-6 h-6 mr-2" icon={icon} />
          {title}
        </a>
      </Link>
    </li>
  );
};

const Nav = () => {
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
        <NavLink href="/login/" icon="key" title="Login" />
      </ul>
    </div>
  );
};

export default Nav;
