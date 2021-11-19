import React from 'react';

import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <ul className="flex flex-wrap text-xl">
        <li className="mr-6">
          <Link href="/">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FeatherIcon className="fill-current w-6 h-6 mr-2" icon="home" />
              Home
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/contact/">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FeatherIcon className="fill-current w-6 h-6 mr-2" icon="mail" />
              Contact Us
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about/">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FeatherIcon
                className="fill-current w-6 h-6 mr-2"
                icon="help-circle"
              />
              About
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            href="https://github.com/chrisclarke1977/videas.me"
          >
            <FeatherIcon className="fill-current w-6 h-6 mr-2" icon="github" />
            GitHub
          </a>
        </li>
        <li className="mr-6">
          <Link href="/login/">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FeatherIcon className="fill-current w-6 h-6 mr-2" icon="key" />
              Login
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
