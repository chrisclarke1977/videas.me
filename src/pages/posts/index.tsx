import React from 'react';
import { useSelector } from 'react-redux';

import CreatePost from '../../components/CreatePost';
import CreateUser from '../../components/CreateUser';
import FakeLogin from '../../components/FakeLogin';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const PostsPage = () => {
  const { posts, auth, users } = useSelector((state: RootState)=> ({
    auth: state.auth,
    posts: state.posts,
    users: state.users
  }));

  return (
    <>
    <Main
    meta={
      <Meta title="Videas.me posts page" description="Videas.me posts page." />
    }
  >
      <FakeLogin />
      <CreatePost />
      <CreateUser />
      <p>{JSON.stringify(auth)}</p>
      <p>{JSON.stringify(posts)}</p>
      <p>{JSON.stringify(users)}</p>
  </Main>

    </>
  );
};

export default PostsPage;