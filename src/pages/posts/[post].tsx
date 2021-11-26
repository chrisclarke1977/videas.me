import { useRouter } from 'next/router';
import {useSelector, useDispatch} from 'react-redux';
import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import { TPost } from '../../types/TPost';
import { Main } from '../../templates/Main';
import { Meta } from '../../layout/Meta';
import { loadPost, loadedPost } from '../../actions/posts';
import Alert from '../../components/Alert';

// FIXME: make sure post loads 

const PostPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const posts_url = `${router.basePath}/api/posts`;
  const [alert, setAlert] = useState<boolean>(false);
  const postId = (typeof router.query.post === 'string' ? router.query.post : router.query.post?.join());
  const { posts, isLoading } = useSelector((state: RootState) => ({
    posts: state.posts.posts,
    isLoading: state.posts.isLoading
  }));
  
  const post: TPost = posts.filter(item => item.id === postId)[0];

  async function fetchPosts() {
    try {
      const res = await fetch(posts_url)
      const posts = await res.json()
      dispatch(loadedPost(posts.posts[postId || posts.posts[0].id]));
      } catch (err) {
        setAlert(true);
    }
  }
  
  useEffect(() => {
    if(!isLoading) {
      dispatch(loadPost(postId || posts[0].id))
    } else {
      fetchPosts()
    }
  }, []);

  return (
    <>    <Main
    meta={!isLoading? 
      <Meta title={`Videas.me ${post?.title} post page`} description={`Videas.me ${post?.title} post page.`} />
      :
      <Meta title={`Videas.me post page`} description={`Videas.me post page.`} />
    }
  >
    {alert && <Alert title="Post load error" message="Posts did not load correctly" type="ERROR" />}
      
    {isLoading? 
    <div>Loading...</div>  :
    <Post {...post} />
  }
      <p>{JSON.stringify(postId)}</p>
      <p>{JSON.stringify(posts)}</p>
    </Main>
    </>
  );
};

export default PostPage;