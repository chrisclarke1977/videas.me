import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadedPostsAction, loadingPostsAction } from '../actions/posts';
import { RootState } from '../store/configureStore';
import Alert from './Alert';
import Post from './Post';

const CreatePost: React.FC = () => {
  const router = useRouter();
  const posts_url = `${router.basePath}/api/posts`;
  const dispatch = useDispatch();
  const [alert, setAlert] = useState<boolean>(false);
  const { posts, isLoading } = useSelector((state: RootState) => ({
    posts: state.posts.posts,
    isLoading: state.posts.isLoading
  }));
  
  async function fetchPosts() {
    try {
      const res = await fetch(posts_url)
      const posts = await res.json()
      dispatch(loadedPostsAction(posts.posts));
      } catch (err) {
        setAlert(true);
    }
  }
  
  useEffect(() => {
    if(!isLoading) {
      dispatch(loadingPostsAction());
    } else {
      fetchPosts()
    }
  }, []);

  return (
    <>
      {alert && <Alert title="Post load error" message="Posts did not load correctly" type="ERROR" />}
      {posts && posts.length > 0 ? 
      <ul>
        {posts.map(i => <Post {...i} />)}
      </ul>
      :
      <div>Loading...</div>
      }
    </>
  );
};

export default CreatePost;