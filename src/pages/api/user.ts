import type { NextApiRequest, NextApiResponse } from 'next';

import { TUser } from '../../types/TUser';
import { users } from '../../utils/users';

type Data = {
  message: string;
  user: TUser;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const searchTerm: string = req.query.user || '';
  try {
    // Fetch users based on current page * perPage
    const output = users.filter(
      (item) => item.user.toLowerCase() === searchTerm.toLowerCase()
    )[0];
    res.status(200).json({
      message: 'Fetched user',
      user: output,
    });
  } catch (err) {
    // ...
    res.status(500);
  }
};
