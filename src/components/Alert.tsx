import React, { useState } from 'react';

interface AlertProps {
  title: string;
  message: string;
  type: 'SUCCESS' | 'WARN' | 'INFO' | 'ERROR';
}

const Alert: React.FC<AlertProps> = ({ title, message, type }) => {
  const [show, setShow] = useState<boolean>(true);

  const contents = ( <> <button type="button" className="absolute top-3 right-3" onClick={() => setShow(false)}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</button>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>

<div className="max-w-xs mt-4">
  <p className="font-bold">{title}</p>

  <p className="mt-1 text-sm text-green-200">
    {message}
  </p>
</div></>
)

const Error = ({ contents }) => (<div role="alert" className="relative p-6 text-white rounded-lg bg-gradient-to-b from-red-600 to-red-700">{contents}</div>);
const Info =({ contents }) => (<div role="alert" className="relative p-6 text-white rounded-lg bg-gradient-to-b from-blue-600 to-blue-700">{contents}</div>);
const Warn = ({ contents }) => (<div role="alert" className="relative p-6 text-white rounded-lg bg-gradient-to-b from-orange-600 to-orange-700">{contents}</div>);
const Success = ({contents}) => (<div role="alert" className="relative p-6 text-white rounded-lg bg-gradient-to-b from-green-600 to-green-700">{contents}</div>);

switch (type) {
  case 'ERROR':
    return (<>
      {show && <Error contents={contents} />}</>
    );
    case 'INFO':
      return (<>
        {show && <Info contents={contents} />}</>
      );
      case 'WARN':
        return (<>
          {show && <Warn contents={contents} />}</>
        );
      case 'SUCCESS': 
    return (<>
      {show && <Success contents={contents} />}</>
    );
  
}


};

export default Alert;