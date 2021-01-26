import api from "./api";

export const loginApiCall = async (username, password) => {
  try {
    const response = await api.post("/admin/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getInfluencersApiCall = async () => {
  try {
    const response = await api.get("/influencer");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getSusbcribersApiCall = async () => {
  try {
    const response = await api.get("/influencer/subscriber");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getAllSubscribersForInfluencersApiCall = async (token, id) => {
  try {
    const response = await api.post(
      "/admin/get-subscribers",
      {
        _id: id,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const verifyInfluencersApiCall = async (token, influencerId, status) => {
  console.log({ token, influencerId, status });
  try {
    const response = await api.post(
      "/admin/verifiy-influencer",
      {
        _id: influencerId,
        verified: status,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// export const signUpApiCall = async (
//   email,
//   password,
//   instagram_link,
//   username,
//   role
// ) => {
//   try {
//     const response = await api.post("/auth/signup", {
//       email,
//       password,
//       instagram_link,
//       username,
//       role,
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const getUserApiCall = async (email, password) => {
//   try {
//     const response = await api.get("/");
//     return response;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const uploadImageApiCall = async (name, type) => {
//   try {
//     const response = await api.post("/influencer/uploadmedia", {
//       type: type,
//       name: name,
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const getInfluencersApiCall = async () => {
//   try {
//     const response = await api.get("/influencer");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const subscribeApiCall = async (influencer_id, token) => {
//   try {
//     const response = await api.post(
//       "/subscription/subscribe",
//       {
//         influencer_id,
//       },
//       {
//         headers: {
//           authorization: token,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const unSubscribeApiCall = async (influencer_id, token) => {
//   try {
//     const response = await api.post(
//       "/subscription/unsubscribe",
//       {
//         influencer_id,
//       },
//       {
//         headers: {
//           authorization: token,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const getAllSubsApiCall = async (token) => {
//   try {
//     const response = await api.get("/subscription/get-influencers", {
//       headers: {
//         authorization: token,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const getAllSubscribersForInfluencersApiCall = async (token) => {
//   try {
//     const response = await api.get("/subscription/get-subscribers", {
//       headers: {
//         authorization: token,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const makeCloseFriendApiCall = async (token, data) => {
//   console.log({ token, data });
//   try {
//     const response = await api.post(
//       "/subscription/mark-as-close-friends",
//       {
//         subscriber_id: data,
//       },
//       {
//         headers: {
//           authorization: token,
//         },
//       }
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const updateApiCall = async (data, token) => {
//   console.log({ data, token });
//   try {
//     const response = await api.post(
//       "/influencer/updateinfluencer/",
//       {
//         image: data.image,
//         phone: data.phone,
//       },
//       {
//         headers: {
//           authorization: token,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const updateEmailApiCall = async (data, token) => {
//   console.log({ data, token });
//   try {
//     const response = await api.post(
//       "/influencer/updateinfluencer/",
//       {
//         email: data.email,
//         phone: data.phone,
//         username: data.username,
//       },
//       {
//         headers: {
//           authorization: token,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
// export const getUserAfterUpdate = async (token) => {
//   console.log({ token });
//   try {
//     const response = await api.post(
//       "/influencer/updateinfluencer/",
//       {},
//       {
//         headers: {
//           authorization: token,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
