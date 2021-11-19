import React from 'react';

import Feeds from '../components/Feeds';
import Nav from '../components/Nav';
import { Meta } from '../layout/Meta';
import { Full } from '../templates/Full';

const FeedPage = () => {
  return (
    <Full meta={<Meta title="Videas.me feed" description="videas.me feed." />}>
      <Nav />
      <section className="relative flex flex-wrap">
        <div className="flex items-center w-full px-4 py-12 lg:w-1/3 sm:px-6 lg:px-8 sm:py-16 lg:py-24 lg:h-screen lg:items-center">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:pr-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Videas. your personal feed
            </h2>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-2/3 lg:h-auto">
          <Feeds />
        </div>
      </section>
    </Full>
  );
};

export default FeedPage;
