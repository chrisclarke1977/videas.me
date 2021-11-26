const defaultUsersState = () => {
  if ((typeof window !== "undefined") && localStorage.getItem("users")) {
    return {
      users: JSON.parse(localStorage.getItem("users")),
      isLoading: false,
      message: '',
      total: 0
    }
  } else {
    return {
      users: [],
      isLoading: false,
      message: '',
      total: 0
    };
  }
};

export const userActions = {
  CLEAR_USERS: "CLEAR_USERS",
  LOADING_USERS: "LOADING_USERS",
  LOADED_USERS: "LOADED_USERS",
  LOADED_MORE_USERS: "LOADED_MORE_USERS",
  CREATE_USER: "CREATE_USER",
  DELETE_USER: "DELETE_USER"
}

const usersReducer = (state = defaultUsersState(), action) => {
  switch (action.type) {
    case userActions.CLEAR_USERS:
      return {
        ...state,
        users: []
      }
    case userActions.LOADING_USERS:
      return {
        ...state,
        isLoading: true
      }
    case userActions.LOADED_USERS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        total: action.total,
        users: action.users
      }
    case userActions.LOADED_MORE_USERS:
      const newUsers = state.users.concat(action.users);
      return {
        ...state,
        isLoading: false,
        message: action.message,
        total: action.total,
        users: newUsers
      }
    case userActions.CREATE_USER:
      const newState = {
        ...state,
        users: state.users
      };
      newState.users.push(action.user);
      return newState;
    case userActions.DELETE_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;