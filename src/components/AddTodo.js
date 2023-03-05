import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/todo/actions";

function AddTodo(){

    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    return (<div style={{
        textAlign: "center",
        display: "flex",
        gap: "10px",
        justifyContent: "center"
    }}>
        <input style={{
            padding: "5px 10px",
            minWidth: "300px"
        }} onChange={(e)=>{
            setTodo(e.target.value);
        }} type="text" placeholder="Enter Todo" />
        <button style={{
            padding: "5px 10px"
        }} onClick={(e)=>{
            dispatch(addTodo(todo));
        }}>Add Todo</button>
    </div>);
}

export default AddTodo;