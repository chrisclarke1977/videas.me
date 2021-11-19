import React from 'react';

import FeatherIcon from 'feather-icons-react';
import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Contact = () => {
  return (
    <div className="contact">
      <p>Please get in touch we love to talk about what we are building</p>
      <p hidden>
        <label className="block">
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="grid grid-cols-1 gap-6">
          <form
            className="container"
            method="POST"
            name="contact"
            action="/?success=true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <label className="block border-collapse" htmlFor="name">
              <span className="text-gray-700">Name *</span>
              <input
                className="form-input px-4 py-3 rounded-full"
                id="name"
                name="name"
                required
                type="text"
              />
            </label>
            <label className="block" htmlFor="company">
              <span className="text-gray-700">Company *</span>
              <input
                className="form-input px-4 py-3 rounded-full"
                id="company"
                name="company"
                required
                type="text"
              />
            </label>
            <label className="block" htmlFor="email">
              <span className="text-gray-700">E-mail Address *</span>
              <input
                className="form-input px-4 py-3 rounded-full"
                id="email"
                type="email"
                name="email"
                required
              />
            </label>
            <label className="block" htmlFor="message">
              <span className="text-gray-700">Message *</span>
              <textarea id="message" name="message" required></textarea>
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              type="submit"
            >
              <FeatherIcon className="fill-current w-6 h-6 mr-2" icon="send" />
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === 'true';
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within your lifetime.
      </p>

      <button
        onClick={() => router.replace('/contact', undefined, { shallow: true })}
      >
        {' '}
        Submit Another Response{' '}
      </button>
    </React.Fragment>
  );

  const ContactForm = <Contact />;

  return (
    <Main
      meta={
        <Meta title="Videas.me contact us" description="Videas.me contact us" />
      }
    >
      {formVisible ? ContactForm : ConfirmationMessage}
    </Main>
  );
};

export default ContactPage;
