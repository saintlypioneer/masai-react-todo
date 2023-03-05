import { useParams } from "react-router-dom";

function TodoItem(props){

    const {id} = useParams();

    return (<>{id}</>);
}

export default TodoItem;