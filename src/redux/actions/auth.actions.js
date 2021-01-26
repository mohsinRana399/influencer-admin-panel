import { loginApiCall } from "../../api/apiCalls";

export const getUserData = () => {
  return async (dispatch) => {};
};
export const loginUser = (userData) => {
  console.log({ userData });
  return async (dispatch) => {
    //check authentication
    const result = await loginApiCall(userData.username, userData.password);
    console.log({ result });
    if (result.message === "Login Succesfully") {
      console.log("logged in");
      dispatch({
        type: "USER_AUTHENTICATION_SUCCESS",
        payload: { admin: result.admin, token: result.token },
      });
    } else {
      console.log(result.message);
    }
  };
};
