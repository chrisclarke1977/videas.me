import { postActions } from "../reducers/posts"
import { TPost } from "../types/TPost";

export const loadPost = (id: string) => ({
  type: postActions.LOAD_POST,
  id: id
})

export const loadedPost = (post: TPost) => ({
  type: postActions.LOAD_POST,
  post: post
})

export const createPostAction = ( post: TPost ) => ({
  type: postActions.CREATE_POST,
  post: post
});

export const loadingPostsAction = () => ({
  type: postActions.LOADING_POSTS,
  posts: []
});

export const loadedPostsAction = (posts: TPost[]) => ({
  type: postActions.LOADED_POSTS,
  posts: posts
});

export const deletePostsAction = (id: string) => ({
  type: postActions.DELETE_POST,
  id: id
})