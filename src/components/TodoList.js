import { useSelector } from "react-redux";

function TodoList(props){

    const todo = useSelector((store)=>store.todo.todo);
    console.log(todo)

    return (<div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }}>
    {
        todo.map((item, idx)=>{
            return (
                <p key={idx}>{item}</p>
            );
        })
    }
    </div>);
}

export default TodoList;