import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserAction } from '../actions/users';
import { randId } from '../utils/misc';

const CreateUser = () => {
  const dispatch = useDispatch();
  const [user_name, setUserName] = useState('');
  const [user_email, setUserEmail] = useState('');

  return (
    <>
            <form onSubmit={(e) => {
        e.preventDefault();
        return dispatch(createUserAction({ id: randId(), user_name, user_email }));
      }}>
        <input name="user_name" onChange={(e) => setUserName(e.target.value)}></input>
        <input name="user_email" onChange={(e) => setUserEmail(e.target.value)}></input>
        <button type="submit">Create User</button>
      </form>
    </>
  );
};

export default CreateUser;