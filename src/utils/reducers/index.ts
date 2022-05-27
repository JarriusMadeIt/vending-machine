import { combineReducers } from "redux";
import balanceReducer from "./balanceReducer";
import snacksReducer from "./snacksReducer";

//root reducer
const rootReducer = combineReducers({
  balance: balanceReducer,
  snacks: snacksReducer,
});

//root state type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
