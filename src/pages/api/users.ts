import type { NextApiRequest, NextApiResponse } from 'next';

import { TUser } from '../../types/TUser';
import { users } from '../../utils/users';
import { sliceIntoChunks } from '../../utils/sliceIntoChunks';

type Data = {
  message: string;
  users?: TUser[];
  total: number;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let searchTerm: string = '';
  if (req.query.search) {
    const result = req.query.search;
    if (typeof result === 'string') {
      searchTerm = result.toLowerCase();
    } else {
      searchTerm = result.join().toLowerCase();
    }
  }
  try {
    // Fetch users based on current page * perPage
    const searchRes = (searchTerm ? users.filter(user => (JSON.stringify(user).toLowerCase().indexOf(searchTerm) !== -1 )) : users)
    const output = sliceIntoChunks(searchRes, 30)[ Number(req.query.page) || 0];
    res.status(200).json({
      message: 'Fetched users',
      users: output,
      total: searchRes.length
    });
  } catch (err) {
    // ...
    res.status(500);
  }
};
