import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../actions/posts';
import { randId } from '../utils/misc';
import Posts from './Posts';

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        return dispatch(createPostAction({ id: randId(), title, content }));
      }}>
        <input name="title" onChange={(e) => setTitle(e.target.value)}></input>
        <input name="content" onChange={(e) => setContent(e.target.value)}></input>
        <button type="submit">Create Post</button>
      </form>
      <Posts />
    </>
  );
};

export default CreatePost;