import { useSelector } from "react-redux";

function TodoList(props){

    const todo = useSelector((store)=>store.todo.todo);
    console.log(todo)

    return (<>
    {
        todo.map((item, idx)=>{
            return (
                <p key={idx}>{item}</p>
            );
        })
    }
    </>);
}

export default TodoList;