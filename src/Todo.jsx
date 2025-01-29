/* eslint-disable no-unused-vars */
import React from 'react'
import { useQuery } from 'react-query'
import './App.css'

export default function Todo() {
    const { data, isLoading } = useQuery({
      queryKey: ["todo"],
      queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()),
    });
   // console.log(data);

    return (
      
        <div className='container'>

            {data &&
                data?.map((todo) => (
                    <div className={`todo ${todo.completed ? "Done" : "Pendding"}`} key={todo.id}>
                        
                {todo.title}
                        <p>Status : {todo.completed ?"Done":"Pendding" }</p>

            </div>
            ))}
            

        </div>
  )
}
