import React from 'react';

import Login from '../../components/Login';
import SearchArray from '../../components/SearchArray';
import useAuth from '../../hooks/useAuth';
import { Meta } from '../../layout/Meta';
import { Lists } from '../../templates/Lists';
import { pornhubhandles } from '../../utils/pornhubhandles';

const PornhubPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Lists
      meta={
        <Meta
          title="Videas.me pornhub list"
          description="videas.me pornhub list."
        />
      }
    >
      <section className="relative flex flex-wrap">
        <div className="flex items-center w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 lg:h-screen lg:items-center">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:pr-12">
            {!isLoggedIn && <Login />}
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          {isLoggedIn && <SearchArray array={pornhubhandles} />}
        </div>
      </section>
    </Lists>
  );
};

export default PornhubPage;
