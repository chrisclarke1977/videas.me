import React from 'react';

const FaqItem = ({ title, content }) => {
  return (
    <li>
      <details className="p-8 bg-gray-100 rounded-lg" open>
        <summary className="text-xl font-medium">
          <span>{title}</span>
        </summary>

        <p className="mt-4">{content}</p>
      </details>
    </li>
  );
};

const Faq = () => {
  return (
    <>
      <section>
        <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <ul className="space-y-8">
            <FaqItem
              title="Who are we?"
              content="We don't really know yet but who we want to be is the greatest content creator focussed premium social media account"
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Faq;
