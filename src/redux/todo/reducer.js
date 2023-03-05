import {ADD_TODO} from './actions'

export const todoReducer = (store={todo: ["todo1", "todo2"]}, {type, payload})=>{
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