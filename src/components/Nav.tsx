import React from 'react';

import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <ul className="flex flex-wrap text-xl">
        <li className="mr-6">
          <Link href="/">
            <a className="text-gray-700 border-none hover:text-gray-900">
              <FeatherIcon icon="home" />
              Home
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about/">
            <a className="text-gray-700 border-none hover:text-gray-900">
              <FeatherIcon icon="help-circle" />
              About
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <a
            className="text-gray-700 border-none hover:text-gray-900"
            href="https://github.com/chrisclarke1977/videas.me"
          >
            <FeatherIcon icon="github" />
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
