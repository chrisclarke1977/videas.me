import React, { useContext } from 'react';

import Login from '../../components/Login';
import SearchArray from '../../components/SearchArray';
import { AuthContext } from '../../context/authContext';
import { Meta } from '../../layout/Meta';
import { Lists } from '../../templates/Lists';
import { avnhandle } from '../../utils/avnhandle';

const AvnPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <Lists
      meta={
        <Meta title="Videas.me avn list" description="videas.me avn list." />
      }
    >
      <section className="relative flex flex-wrap">
        <div className="flex items-center w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 lg:h-screen lg:items-center">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:pr-12">
            {!user && <Login />}
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          {user && <SearchArray array={avnhandle} />}
        </div>
      </section>
    </Lists>
  );
};

export default AvnPage;
