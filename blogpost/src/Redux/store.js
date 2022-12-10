import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
import {reducer as AppReducer} from "./AppReducer/reducer";
import thunk from "redux-thunk"; 
const rootreducer=combineReducers({AuthReducer,AppReducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))