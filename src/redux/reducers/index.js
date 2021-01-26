import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import storageReducer from "./storage.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  storage: storageReducer,
});

export default rootReducer;
