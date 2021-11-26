import React from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../actions/auth';

const FakeLogin: React.FC = () => {
  const dispatch = useDispatch();
  const user = { id: 'id', user_id: 'user_id', user_email: 'user_email' };
  return (
    <>
      <button onClick={() => dispatch(loginAction(user))}>Fake Login</button>
    </>
  );
};

export default FakeLogin;