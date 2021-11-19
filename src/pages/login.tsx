import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Login = () => {
  return (
    <Main
      meta={<Meta title="Videas.me login" description="videas.me login." />}
    >
      <div className="login">
        <p>Login or Signup here</p>
      </div>
    </Main>
  );
};

export default Login;
