import { combineReducers } from "redux";
import songReducer from "./song";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  songReducer,
  cartReducer,
});

export default rootReducer;
