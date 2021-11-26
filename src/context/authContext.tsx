import { createContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction, logoutAction } from '../actions/auth';
import netlifyIdentity from 'netlify-identity-widget';

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // on login
    netlifyIdentity.on('login', (u) => {
      setUser(u);
      dispatch(loginAction(u));
      netlifyIdentity.close();
    });

    // on logout
    netlifyIdentity.on('logout', () => {
      setUser(null);
      dispatch(logoutAction());
    });

    // connect with Netlify Identity
    netlifyIdentity.init();
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    login,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
