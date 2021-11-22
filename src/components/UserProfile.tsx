import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { getUser } from '../helpers/getUser';
import User from './User';

const UserProfile = () => {
  const router = useRouter();
  const [activeUser, setActiveUser] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<string>(router.query.user);

  useEffect(() => {
    if (router && router.query) {
      setUser(router.query.user);
    }
  }, [router]);

  useEffect(() => {
    setIsLoading(true);
    getUser({ user }).then((data) => {
      setIsLoading(false);
      setActiveUser(data.user);
    });
  }, [user]);

  return (
    <>
      <h1>Profile: {user}</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && activeUser && <User {...activeUser} />}
    </>
  );
};

export default UserProfile;
