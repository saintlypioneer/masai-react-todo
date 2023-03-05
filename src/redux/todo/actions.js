export const ADD_TODO = "addTodo";

export const addTodo = (todo)=>{
    return ({
        type: ADD_TODO,
        payload: todo
    });
}