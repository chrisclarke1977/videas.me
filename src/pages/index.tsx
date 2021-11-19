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
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
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
