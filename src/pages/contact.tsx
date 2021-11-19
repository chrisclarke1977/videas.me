import React from 'react';

import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Contact = () => {
  return (
    <div className="contact">
      <p>Please get in touch we love to talk about what we are building</p>
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <form
        className="container"
        method="POST"
        name="contact-form"
        action="/?success=true"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" required type="text" />
        <label htmlFor="company">Company *</label>
        <input id="company" name="company" required type="text" />
        <label htmlFor="email">E-mail Address *</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
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
        within 24-48 hours.
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
