import React from 'react';

import FeatherIcon from 'feather-icons-react';

const Login = () => {
  return (
    <>
      <div className="max-w-md w-full space-y-8">
        <div>
          <FeatherIcon icon="lock" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <button
              data-netlify-identity-button
              type="submit"
              className="group relative w-full justify-center py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded inline-flex items-center"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-white group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
