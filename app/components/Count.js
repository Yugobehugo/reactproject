

// import React, { useState, useEffect } from 'react';

// export default function Count() {
//     const [todo, setTodo] =  useState('')
//     const [todolist, setTodolist] =  useState([])
//     const [lastitem, setlastitem] = useState(null);

//     useEffect(() => {
//         setlastitem(todolist.length - 1);
//     }, [todolist])

//     useEffect(() => {
//         localStorage.setItem("todos", todolist)
//     }, [todolist])

 

//     return (
//         <div>
          
//             <h1>To do :</h1>
//             { todolist.map((item, index) => {
//                 return (
//                     <p style={{color : index === lastitem ? 'red' : 'black'}} key={index}>{item} <span onClick={() => {deleteTodo(index)}}></span></p>
//                 )
//             })}
//             <input type="text"
//  onChange={event => setTodo(event.target.value)} value={todo}/>
//             <button onClick={() => (setTodolist(todolist => [...todolist, todo]), setTodo(''))}>Add Todo</button>
//         </div>
//     )
// }

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