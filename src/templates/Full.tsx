import React, { ReactNode } from 'react';

import Script from 'next/script';

import { AppConfig } from '../utils/AppConfig';

type IFullProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Full = (props: IFullProps) => (
  <>
    <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    <div className="antialiased w-full text-gray-700 px-1">
      {props.meta}

      <div className="max-w-screen-lg mx-auto">
        <div className="py-5 text-xl content">{props.children}</div>

        <div className="border-t border-gray-300 text-center py-8 text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
          {/*
           * PLEASE READ THIS SECTION
           * We'll really appreciate if you could have a link to our website
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * Thank you for your support it'll mean a lot for us.
           */}
        </div>
      </div>
    </div>
  </>
);

export { Full };
