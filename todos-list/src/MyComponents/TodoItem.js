import React from 'react'

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

export const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
      
    </div>
  )
}


