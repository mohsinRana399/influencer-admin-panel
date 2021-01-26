import {
  loginApiCall,
  getInfluencersApiCall,
  verifyInfluencersApiCall,
  getAllSubscribersForInfluencersApiCall,
  getSusbcribersApiCall,
  // getSubscribersApiCall,
} from "../../api/apiCalls";

export const getInfluencerData = () => {
  return async (dispatch) => {
    const result = await getInfluencersApiCall();
    dispatch({ type: "ALL_INFLUENCERS", payload: result.results });
    console.log({ result });
  };
};
export const getSubscriberData = () => {
  return async (dispatch) => {
    const Subscriber_result = await getSusbcribersApiCall();
    dispatch({ type: "ALL_SUBS_GAINED", payload: Subscriber_result.results });
    console.log({ Subscriber_result });
  };
};
export const getAllSubscribers = (token, id) => {
  return async (dispatch) => {
    const result = await getAllSubscribersForInfluencersApiCall(
      "Bearer " + token,
      id
    );
    dispatch({ type: "ALL_SUBSCRIBERS", payload: result.subscribers });
    console.log({ result });
  };
};
export const loginUser = (userData) => {
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
export const verifyInfluencer = (token, influencerId, status) => {
  console.log({ token, influencerId, status });
  return async (dispatch) => {
    const verifyResult = await verifyInfluencersApiCall(
      "Bearer " + token,
      influencerId,
      status
    );
    dispatch(getInfluencerData());
    console.log({ verifyResult });
  };
};
