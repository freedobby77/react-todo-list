import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList({ todos, isActive, setTodos }) {
  return (
    <div>
      <h3>{isActive === true ? "🔥 Working 🔥" : "✅ Done ✅"}</h3>
      {/* isActive===true일때는 working만 나오고, false일때는 done이 나와야 해서, map을 사용하기 전 filter로 한 번 걸러줌 */}
      {/* isDone이 isActive가 아닐 경우에만 출력 */}
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            // <div style={{ border: "1px solid black" }}>
            //   key={item.id}
            //   <h5>{item.title}</h5>
            //   <p>{item.contents}</p>
            //   <button>{isActive ? "완료" : "취소"}</button>
            //   <button>삭제</button>
            // </div> // Todo.jsx로!!
            <Todo item={item} isActive={isActive} setTodos={setTodos}></Todo>
            // Todo.jsx로 item, isActive, setTodos props 내려주기
          );
        })}
    </div>
  );
}

export default TodoList;
