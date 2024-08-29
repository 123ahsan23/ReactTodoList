
import React from 'react';
import { TodoItem } from './TodoItem';

// for const import you will use

// import React from 'react'

// export const Todos = () => {
//   return (
//     <div>
//       Todo works
//     </div>
//   )
// }
// but then in app .js write 
// import {Todos} from './MyComponents/Todos';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "100vh",
        margin: "40px auto"
    }
    return (
        <div className='container my-3' style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? (
                "No todos to display"
            ) : (
                props.todos.map((todo) => {
                    return (
                        <div key={todo.sno}>
                            <TodoItem todo={todo} onDelete={props.onDelete} /> 
                            <hr/>
                        </div>
                    );
                })
            )}
        </div>
    );
};