import React from 'react';

interface PostProps {
  id: string;
  title: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ id, title, content }) => {
  return (
    <>
      <li>
      <a className="block overflow-hidden shadow-xl rounded-3xl p-4" href={`/posts/${id}`}>
      <div className="relative w-full p-6 -mt-8 bg-white rounded-3xl">
        <p>{id}</p>
        <h5 className="text-xl font-bold text-gray-900">{title}</h5>
        <p className="hidden mt-2 text-gray-500 sm:block">{content}</p>
      </div>
      </a>
      </li>
    </>
  );
}

export default Post;