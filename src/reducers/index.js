import { combineReducers } from "redux";
import blog from "./blog";
import cart from "./cart";
export default combineReducers({
  cart,
  blog
});
