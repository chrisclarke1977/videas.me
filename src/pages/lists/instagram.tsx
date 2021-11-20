import React from 'react';

import Login from '../../components/Login';
import { Meta } from '../../layout/Meta';
import { Lists } from '../../templates/Lists';
import { instanodupes } from '../../utils/instahandles';

const InstagramPage = () => {
  return (
    <Lists
      meta={
        <Meta
          title="Videas.me instagram list"
          description="videas.me instagram list."
        />
      }
    >
      <section className="relative flex flex-wrap">
        <div className="flex items-center w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 lg:h-screen lg:items-center">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:pr-12">
            <Login />
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          <ul>
            {instanodupes.sort().map((handle) => (
              <li key={handle}>
                <a href={handle}>{handle}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Lists>
  );
};

export default InstagramPage;
