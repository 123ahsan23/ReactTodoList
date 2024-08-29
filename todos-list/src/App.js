
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import About from './MyComponents/About';
// import {Calculator} from './MyComponents/Calculator'
import { Counter } from './MyComponents/Counter';

//for calculator 

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  return (
    // <Router>
    //   <Header title="MyTodosList" searchBar={false} />
    //   <Routes>
    //     <Route exact path="/" element={
    //       <>
    //         <AddTodo addTodo={addTodo} />
    //         <Todos todos={todos} onDelete={onDelete} />


    //       </>
    //     } />
    //     <Route exact path="/about" element={<About />} />
    //   </Routes>
    //   <Footer />
    // </Router>
    <>
      {/* <Calculator />  */}
      <Counter/>
    </>
  );
}

export default App;



