// import logo from './logo.svg';
import "./App.css";
import { Header } from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Addtodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";
// import { TodoItem } from "./MyComponents/TodoItem";
import { About } from "./MyComponents/About";
import { Footer } from "./MyComponents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("I am OnDelete", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    // console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      Title: title,
      Desc: desc,
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Tudos List" searchBar={false} />
        <Switch>
          {/* exact is used to target perticual page and if not then like if we simply wirte /about then it will take it as a first route that is '/' */}
          <Route
            exact path="/"
            render={() => {
              return (
                <>
                  <Addtodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        {/* <TodoItem/> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
