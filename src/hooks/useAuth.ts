import { useState } from 'react';

type TAuth = {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
};

export default function useAuth(): TAuth {
  const [loggedIn, setIsLoggedIn] = useState<boolean>(true);

  return {
    isLoggedIn: loggedIn,
    setIsLoggedIn,
  };
}
