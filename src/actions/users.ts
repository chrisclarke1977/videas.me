import { userActions } from "../reducers/users"

export const createUserAction = ( user ) => ({
  type: userActions.CREATE_USER,
  user: user
});

export const clearUsersAction = () => ({
  type: userActions.CLEAR_USERS,
})

export const loadingUsersAction = () => ({
  type: userActions.LOADING_USERS,
});

export const loadedUsersAction = ({ users, message, total }) => ({
  type: userActions.LOADED_USERS,
  users: users,
  message: message,
  total: total
});

export const loadedMoreUsersAction = ({ users, message, total }) => ({
  type: userActions.LOADED_MORE_USERS,
  users: users,
  message: message,
  total: total
});

export const deleteUsersAction = (id) => ({
  type: userActions.DELETE_USER,
  id: id
})