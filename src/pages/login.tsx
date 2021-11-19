import React from 'react';

import Login from '../components/Login';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const LoginPage = () => {
  return (
    <Main
      meta={<Meta title="Videas.me login" description="videas.me login." />}
    >
      <div className="login">
        <p>Login or Signup here</p>
        <Login />
      </div>
    </Main>
  );
};

export default LoginPage;
