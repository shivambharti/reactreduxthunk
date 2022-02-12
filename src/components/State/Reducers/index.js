import productRediucer from "./ProductReducer";
import { combineReducers } from "redux";

const rootreducer=combineReducers({
    productRediucer:productRediucer
});

export default rootreducer;