import { combineReducers } from "redux";
import {usersReducer} from "./usersreducer";

export const rootReducer = combineReducers({
    users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>
