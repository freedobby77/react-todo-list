// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Input from "./components/Input";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const initialState = [
    { title: "제목", contents: "내용", isDone: false, id: uuidv4() },
  ];

  const [todos, setTodos] = useState(initialState);
  return (
    <div>
      <Header>
        <h2>Todo List</h2>
        <h2>React</h2>
      </Header>
      <main style={{ padding: "20px 30px 30px 30px" }}>
        <Input setTodos={setTodos} />
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
        {/* 삭제버튼(Todo.jsx) Component로 setTodos 넘겨주기 */}
        {/* Todo의 부모 Component가 TodoList이기 때문에 TodoList에도 넘겨줘야함 */}
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
