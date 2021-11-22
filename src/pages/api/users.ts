import type { NextApiRequest, NextApiResponse } from 'next';

import { TUser } from '../../types/TUser';
import { users } from '../../utils/users';

type Data = {
  message: string;
  users: TUser[];
  total: number;
  curPage: number;
  maxPage: number;
};
function limit(c) {
  return this.filter((x, i) => {
    return i <= c - 1;
  });
}
// limit function,internally we have just used filter function and //used index of its callback function
Array.prototype.limit = limit;
function skip(c) {
  return this.filter((x, i) => {
    return i > c - 1;
  });
}
Array.prototype.skip = skip;

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // res.status(200).json(users);
  const curPage: number = req.query.page || 1;
  const searchTerm: string = req.query.search || '';
  // Display 10 users per page
  const perPage = req.query.number || 10;

  try {
    // Fetch users based on current page * perPage
    const searchAll = users
      .sort()
      .filter(
        (item) => JSON.stringify(item).indexOf(searchTerm.toLowerCase()) !== -1
      );
    const output = searchAll.skip((curPage - 1) * perPage).limit(perPage);
    const totalUsers = searchAll.length;
    res.status(200).json({
      message: 'Fetched users',
      users: output,
      total: totalUsers,
      curPage,
      maxPage: Math.ceil(totalUsers / perPage),
    });
  } catch (err) {
    // ...
    res.status(500);
  }
};
