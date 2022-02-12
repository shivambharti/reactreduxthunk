import rootreducer from "./Reducers/index";

import { createStore,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
const initalState = {}

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]

export const store = createStore(rootreducer, initalState, composeEnhancers(applyMiddleware(...[thunk])))
