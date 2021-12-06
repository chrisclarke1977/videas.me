import Link from 'next/link';
import React, { useContext, useState } from 'react';

import { AuthContext } from '../context/authContext';

const NavMainBurger = () => {
  const { user, logout, login } = useContext(AuthContext);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="shadow-sm">
      <div className="p-4 mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
          </div>

          <nav className={`${showLinks && 'hidden'} text-sm font-medium space-x-8 md:flex`}>
            <Link href="/">
              <a className="text-gray-500" href="/">Home</a>
            </Link>
            <Link href="/faq/">
              <a className="text-gray-500" href="/faq/">FAQs</a></Link>
            <Link href="/contact/">
              <a className="text-gray-500" href="/contact/">Contact Us</a></Link>
            <Link href="/about/">
              <a className="text-gray-500" href="/about/">About</a></Link>
            <Link href="/plans/">
              <a className="text-gray-500" href="/plans/">Plans</a></Link>
          </nav>

          <div className={`hidden items-center justify-end flex-1 space-x-4 sm:flex`}>
            {!user ?
              <Link href="/login/">
                <a onClick={login} className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg" href="/login/"> Log in </a>
              </Link>
              :
              <Link href="/logout/">
                <a onClick={logout} className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg" href="/logout/"> Log out </a>
              </Link>
            }
            <Link href="/signup/">
              <a className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg" href="/signup/"> Sign up </a>
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setShowLinks(!showLinks)} className="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavMainBurger;
