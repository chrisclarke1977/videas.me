import React from 'react';

import Faq from '../components/Faq';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const FaqPage = () => {
  return (
    <Main
      meta={
        <Meta title="Videas.me home page" description="Videas.me home page." />
      }
    >
      <Faq />
    </Main>
  );
};

export default FaqPage;
