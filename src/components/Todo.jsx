import React from "react";
import "./Todo.css";

function Todo({ item, isActive, setTodos }) {
  const handleDeleteButton = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id)); //임의의 변수 t의 id와 item의 id가 다르면 갱신이 됨
  }; //삭제버튼 클릭 시 실행
  // setTodos를 쓰면 이전의 값을 가져올 수 있음

  const handleSwitchButtonClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  }; // setTodos에서 isDone 값을 false와 true로 바꿈

  return (
    <div className="todo-box" key={item.id}>
      <p className="todo-title">{item.title}</p>
      <p className="todo-contents">{item.contents}</p>
      <button onClick={handleSwitchButtonClick}>
        {isActive ? "완료" : "취소"}
      </button>
      <button onClick={handleDeleteButton}>삭제</button>
    </div>
  );
}

export default Todo;
