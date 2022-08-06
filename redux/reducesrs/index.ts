import { combineReducers } from "redux";
import { searchReducer } from "./profileReducer";

const reducers = combineReducers({
  repositories: searchReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
