import { authActions } from "../reducers/auth";

export const loginAction = (user) => ({
  type: authActions.LOGIN,
  user
});

export const logoutAction = () => ({
  type: authActions.LOGOUT,
})
