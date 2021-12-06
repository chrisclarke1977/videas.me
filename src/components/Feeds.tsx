import React from 'react';

import { TFeedItem } from '../types/TfeedItem';
import { getFeed, randId } from '../utils/misc';
import FeedItem from './FeedItem';

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
