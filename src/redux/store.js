import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
    todo: todoReducer
})

const store = createStore(rootReducer);

export {store};