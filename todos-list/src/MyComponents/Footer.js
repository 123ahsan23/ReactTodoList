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

export default function Footer() {

  // let footerStyle = {
  //   position: "relative",
  //   top: "70vh",
  //   width: "100%",
  //   border: "2px solid red"
  // }
  return (
    <footer className='bg-dark text-light py-3' >
      <p className="text-center">

        Copyright &copy; MyTodoList.com
      </p>
    </footer>
  )
}
