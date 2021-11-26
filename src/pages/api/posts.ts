import type { NextApiRequest, NextApiResponse } from 'next';

import { TPost } from '../../types/TPost';
import { posts } from '../../utils/posts';

type Data = {
  message: string;
  posts?: TPost[];
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // let searchTerm: string = '';
  // if (req.query.user) {
  //   const result = req.query.user;
  //   if (typeof result === 'string') {
  //     searchTerm = result;
  //   } else {
  //     searchTerm = result.join();
  //   }
  // }
  try {
    // Fetch users based on current page * perPage
    const output = posts; //.filter(
      // (item) => item.user.toLowerCase() === searchTerm.toLowerCase()
    // ); // [0];
    res.status(200).json({
      message: 'Fetched post',
      posts: output,
    });
  } catch (err) {
    // ...
    res.status(500);
  }
};
