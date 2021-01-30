import { combineReducers } from "redux";
import listReducer from "@/pages/list/store/reducer";
import countReducer from "@/pages/count/store/reducer";
import homeReducer from "@/pages/home/store/reducer";
const RootReducer = combineReducers({
  list: listReducer,
  count: countReducer,
  home: homeReducer,
});

export default RootReducer