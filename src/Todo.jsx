/* eslint-disable no-unused-vars */
import React from 'react'
import { useMutation, useQuery } from 'react-query'
import './App.css'

export default function Todo() {
    //  with useMutation () it take fun only
    const getMutation = useMutation({
        mutationFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()),
    }
    );
 
  //  with useQuery () it take key && fun
  // const { data, isLoading } = useQuery({
  //   queryKey: ["todo"],
  //   queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()),
  // });
  //    console.log(data);

    return (
      <>
        <button onClick={() => getMutation.mutate()}> Get Todos </button>
        <div className="container">
          {getMutation.data &&
            getMutation.data?.map((todo) => (
              <div
                className={`todo ${todo.completed ? "Done" : "Pendding"}`}
                key={todo.id}
              >
                {todo.title}
                <p>Status : {todo.completed ? "Done" : "Pendding"}</p>
              </div>
            ))}
      {/* When use useQuery */}
          {/*
        {data &&
  data?.map((todo) => (
    <div
      className={`todo ${todo.completed ? "Done" : "Pendding"}`}
      key={todo.id}
    >
      {todo.title}
      <p>Status : {todo.completed ? "Done" : "Pendding"}</p>
    </div>
  ))}
       */}
        </div>
      </>
    );
}
