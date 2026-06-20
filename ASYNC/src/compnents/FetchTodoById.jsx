import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const FetchTodoById = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response)=>response.json()) //json : 자바스크립트 객체로 변환
            .then((result)=>{
                setData(result);
                console.log(result);
            })
            .catch((error)=>console.log(error));
    },[id]);
}

export default FetchTodoById;