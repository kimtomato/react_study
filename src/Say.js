import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); //useState 함수의 값의 형태는 자유(숫자, 문자열, 객체 ,베열 가능)
  const onClickEnter = () => setMessage("안녕하세요 여러분!");
  const onClickLeave = () => setMessage("안녕히 계세요! 저는 나가보겠습니당~");

  //useState 함수의 초기값을 검정으로 설정
  const [color, setColor] = useState("black");

  //함수호출시 배열 반환
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
