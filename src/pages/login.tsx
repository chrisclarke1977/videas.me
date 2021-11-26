import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import Login from '../components/Login';
import { Meta } from '../layout/Meta';
import { Full } from '../templates/Full';

const LoginPage = () => {
  const state = useSelector((state: RootState) => {
    state
  });
  
  return (
    <Full
      meta={<Meta title="Videas.me login" description="videas.me login." />}
    >
      <section className="relative flex flex-wrap">
        <div className="flex items-center w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 lg:h-screen lg:items-center">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:pr-12">
            <Login />
            <p>{JSON.stringify(state)}</p>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://placeimg.com/640/480/people"
            alt=""
          />
        </div>
      </section>
    </Full>
  );
};

export default LoginPage;
