const initState = {
  allInfluencers: null,
  allSubscribers: null,
  allSubsGained: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case "ALL_INFLUENCERS":
      return (state = {
        ...state,
        allInfluencers: action.payload,
      });
    case "ALL_SUBSCRIBERS":
      return (state = {
        ...state,
        allSubscribers: action.payload,
      });
    case "ALL_SUBS_GAINED":
      return (state = {
        ...state,
        allSubsGained: action.payload,
      });

    default:
      return state;
  }
};
