const defaultPostsState = () => {
  if ((typeof window !== "undefined") && localStorage.getItem("posts")) {
    return {
      posts: JSON.parse(localStorage.getItem("posts")),
      isLoading: false
    }
  } else {
    return {
      posts: [],
      isLoading: false,
    };
  }
};

export const postActions = {
  LOAD_POST: "LOAD_POST",
  LOADED_POST: "LOADED_POST",
  LOADING_POSTS: "LOADING_POSTS",
  LOADED_POSTS: "LOADED_POSTS",
  CREATE_POST: "CREATE_POST",
  DELETE_POST: "DELETE_POST"
}

const postsReducer = (state = defaultPostsState(), action) => {
  const newState = { ...state };
  switch (action.type) {
    case postActions.LOAD_POST:
      return {
        ...state,
      isLoading: true
    }
      case postActions.LOADED_POST:
        newState.posts[action.post.id] = action.post;
        newState.isLoading = false;
        return newState
    case postActions.LOADING_POSTS:
      return {
        ...state,
        isLoading: true
      }
    case postActions.LOADED_POSTS:
        return {
          ...state,
          posts: action.posts,
          isLoading: false
        }
    case postActions.CREATE_POST:
      newState.posts.push(action.post);
      return newState;
    case postActions.DELETE_POST:
      return {};
    default:
      return state;
  }
};

export default postsReducer;