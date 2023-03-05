import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/todo/actions";

function AddTodo(){

    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    return (<>
        <input onChange={(e)=>{
            setTodo(e.target.value);
        }} type="text" placeholder="Enter Todo" />
        <button onClick={(e)=>{
            dispatch(addTodo(todo));
        }}>Add Todo</button>
    </>);
}

export default AddTodo;