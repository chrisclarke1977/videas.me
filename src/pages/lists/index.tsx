import React from 'react';

import Login from '../../components/Login';
import { Meta } from '../../layout/Meta';
import { Lists } from '../../templates/Lists';

const ListsPage = () => {
  return (
    <Lists
      meta={<Meta title="Videas.me login" description="videas.me login." />}
    >
      <section className="relative flex flex-wrap">
        <div className="flex items-center w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 lg:h-screen lg:items-center">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:pr-12">
            <Login />
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
    </Lists>
  );
};

export default ListsPage;
