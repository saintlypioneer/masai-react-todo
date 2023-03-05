import {ADD_TODO} from './actions'

export const todoReducer = (store={todo: []}, {type, payload})=>{
    switch (type){
        case ADD_TODO:
            return {
                ...store,
                todo: [...store.todo, payload]
            };
        default:
            return store;
    }
}