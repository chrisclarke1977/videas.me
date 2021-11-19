import React from 'react';

import { useRouter } from 'next/router';

import Video from '../components/Video';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta title="Videas.me home page" description="Videas.me home page." />
      }
    >
      <Video
        className="w-full"
        src={`${router.basePath}/assets/videos/intro.mp4`}
      />
    </Main>
  );
};

export default Index;
