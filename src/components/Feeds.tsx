import React from 'react';

import FeatherIcon from 'feather-icons-react';

import { TFeedItem } from '../types/TfeedItem';
import { getFeed, randId } from '../utils/misc';

interface FeedItemProps {
  content: string;
  href: string;
  id: string;
  likes: string;
  shares: string;
  src: string;
  tips: string;
  title: string;
}

const FeedItem: React.FC<FeedItemProps> = ({
  content,
  href,
  id,
  likes,
  shares,
  src,
  tips,
  title,
}) => {
  return (
    <a className="block overflow-hidden shadow-xl rounded-3xl" href={href}>
      <img className="object-cover w-full h-64" src={src} alt={title} />
      <div className="relative w-full p-6 -mt-8 bg-white rounded-3xl">
        <p>{id}</p>
        <h5 className="text-xl font-bold text-gray-900">{title}</h5>
        <p className="hidden mt-2 text-gray-500 sm:block">{content}</p>
        <dl className="items-center mt-6 sm:flex">
          <div className="flex items-center">
            <span className="flex-shrink-0 p-1 text-white bg-pink-600 rounded-full">
              <span className="w-5 h-5">
                <FeatherIcon icon="heart" />
              </span>
            </span>

            <span className="flex ml-3 text-sm font-medium text-gray-600 space-x-1 space-x-reverse">
              <dt>Likes</dt>
              <dd className="order-first">{likes}</dd>
            </span>
          </div>

          <div className="flex items-center mt-3 sm:ml-6 sm:mt-0">
            <span className="flex-shrink-0 p-1 text-white bg-pink-600 rounded-full">
              <span className="w-5 h-5">
                <FeatherIcon icon="share-2" />
              </span>
            </span>

            <span className="flex ml-3 text-sm font-medium text-gray-600 space-x-1 space-x-reverse">
              <dt>Shares</dt>
              <dd className="order-first">{shares}</dd>
            </span>
          </div>
          <div className="flex items-center mt-3 sm:ml-6 sm:mt-0">
            <span className="flex-shrink-0 p-1 text-white bg-pink-600 rounded-full">
              <span className="w-5 h-5">
                <FeatherIcon icon="dollar-sign" />
              </span>
            </span>

            <span className="flex ml-3 text-sm font-medium text-gray-600 space-x-1 space-x-reverse">
              <dt>Tips</dt>
              <dd className="order-first">{tips}</dd>
            </span>
          </div>
        </dl>
      </div>
    </a>
  );
};

const Feeds = () => {
  const feedItems: TFeedItem[] = [];
  for (let i: number = 0; i < 160; i += 1) {
    feedItems.push(getFeed(randId()));
  }

  return (
    <div className="w-full">
      {feedItems.map((feedItem) => (
        <FeedItem key={feedItem.id} {...feedItem} />
      ))}
    </div>
  );
};

export default Feeds;
