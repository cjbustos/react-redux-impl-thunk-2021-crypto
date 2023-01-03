import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { crytosReducer } from "./reducers";

export const store = createStore(
    crytosReducer,
    {
        cryptos: [],
        selectedOption: ''
    },
    applyMiddleware(thunk)
)