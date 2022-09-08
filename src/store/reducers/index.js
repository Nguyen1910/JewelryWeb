import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  authReducer,
  cartReducer,
});

export default rootReducer;
