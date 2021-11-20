import { getFeed, randId } from '../utils/misc';

const feedIds = {
  0: randId(),
  1: randId(),
  2: randId(),
  3: randId(),
  4: randId(),
  5: randId(),
  6: randId(),
  7: randId(),
};

export const feedCollection = {
  [feedIds[0]]: [
    getFeed(feedIds[0]),
    getFeed(feedIds[0]),
    getFeed(feedIds[0]),
    getFeed(feedIds[0]),
    getFeed(feedIds[0]),
    getFeed(feedIds[0]),
    getFeed(feedIds[0]),
    getFeed(feedIds[0]),
    getFeed(feedIds[0]),
  ],
  [feedIds[1]]: [
    getFeed(feedIds[1]),
    getFeed(feedIds[1]),
    getFeed(feedIds[1]),
    getFeed(feedIds[1]),
    getFeed(feedIds[1]),
    getFeed(feedIds[1]),
    getFeed(feedIds[1]),
    getFeed(feedIds[1]),
  ],
  [feedIds[2]]: [
    getFeed(feedIds[2]),
    getFeed(feedIds[2]),
    getFeed(feedIds[2]),
    getFeed(feedIds[2]),
  ],
  [feedIds[3]]: [
    getFeed(feedIds[3]),
    getFeed(feedIds[3]),
    getFeed(feedIds[3]),
    getFeed(feedIds[3]),
  ],
  [feedIds[4]]: [
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
  ],
  [feedIds[5]]: [
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
  ],
  [feedIds[6]]: [
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
  ],
  [feedIds[7]]: [
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
    getFeed(feedIds[4]),
  ],
};

export const getFeedData = (userId) => {
  return new Promise((resolve, reject) => {
    const feedData = feedCollection[userId];

    if (feedData) {
      resolve({ data: { feedData } });
    } else {
      reject(new Error('User not found.'));
    }
  });
};
