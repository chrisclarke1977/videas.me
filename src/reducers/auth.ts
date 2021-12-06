const defaultAuthState = () => {
  if ((typeof window !== "undefined") && localStorage.getItem("auth")) {
    return JSON.parse(localStorage.getItem("auth"));
  } else {
    return {};
  }
};

export const authActions = {
  "LOGIN": "LOGIN",
  "LOGOUT": "LOGOUT"
}

const authReducer = (state = defaultAuthState(), action) => {
  switch (action.type) {
    case authActions.LOGIN:
      return {
        user: action.user
      };
    case authActions.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;