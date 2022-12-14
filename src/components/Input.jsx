import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Input.css";

function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();
    // 새로고침x 상태유지

    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    // title과 contents를 todos에 넣어줌
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmitClick}>
        {/* button이 클릭될 때 onSubmit 함수가 항상 실행되게 */}
        제목 <input value={title} onChange={handleTitleChange} />
        내용 <input value={contents} onChange={handleContentsChange} />
        {/* input에 입력할 때마다 State가 갱신되어야 하기 때문에 onChange를 사용 */}
        <button>추가</button>
      </form>
    </section>
  );
}

export default Input;
