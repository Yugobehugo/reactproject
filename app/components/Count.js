// import react, {useEffect, useState} from 'react'

// export default function Count() {
//     const [todolist, setTodoList] = useState([
//         "toto",
//         "pute",
//         "oui"
//     ]);
//     const [todo, setTodo] = useState('');
//     const removeTodo = todo => {
//         setTodoList(todolist.filter(t => t != todo));
//     }

//     return (
//         <div>
//             <h1>Todo List :</h1>

//             <input value={todo} onChange={(e) => setTodo(e.target.value)} />
//             <button onClick={() => setTodoList([ ... todolist, todo])}>Add</button>
//             {todolist.map(todo => (
//                 <div>
//                     <h2>{todo}</h2>
//                     <button onClick={() => removeTodo(todo)}>Supprimer</button>
//                 </div>

//             ))}
//         </div>
//     );

//     useEffect(() => {
//         console.log('hello')
//     })
// };

import React, { useState, useEffect } from 'react';

export default function Count() {
    const [todo, setTodo] =  useState('')
    const [todolist, setTodolist] =  useState([])
    const [lastitem, setlastitem] = useState(null);

    useEffect(() => {
        setlastitem(todolist.length - 1);
    }, [todolist])

    useEffect(() => {
        localStorage.setItem("todos", todolist)
    }, [todolist])

 

    return (
        <div>
          
            <h1>To do :</h1>
            { todolist.map((item, index) => {
                return (
                    <p style={{color : index === lastitem ? 'red' : 'black'}} key={index}>{item} <span onClick={() => {deleteTodo(index)}}></span></p>
                )
            })}
            <input type="text"
 onChange={event => setTodo(event.target.value)} value={todo}/>
            <button onClick={() => (setTodolist(todolist => [...todolist, todo]), setTodo(''))}>Add Todo</button>
        </div>
    )
}