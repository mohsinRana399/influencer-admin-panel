const initState = {
  uData: null,
  authenticated: false,
  authError: null,
  adminData: null,
  adminToken: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return (state = {
        ...state,
        uData: action.payload,
      });
    case "USER_AUTHENTICATION_SUCCESS":
      return (state = {
        ...state,
        authenticated: true,
        adminData: action.payload.admin,
        adminToken: action.payload.token,
      });

    case "USER_AUTHENTICATION_FAILURE":
      return (state = {
        ...state,
        authenticated: false,
        error: action.payload,
      });
    case "USER_LOGOUT_SUCCESS":
      return (state = {
        ...state,
        authenticated: false,
      });
    default:
      return state;
  }
};
