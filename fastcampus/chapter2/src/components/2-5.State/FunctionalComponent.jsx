import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FunctionalComponent = () => {
  // props는 변경할 수 없다.
  // 따라서 값을 변경하고 싶을 때는 state를 사용한다.
  // 이 때 state의 값을 직접 변경하면 안된다.
  // ex. date = new Date(); (x), setDate(new Date()); (o)
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  // useEffect에서 빈 배열을 주면 componentDidMount와 동일한 동작을 한다.
  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world! It's Functional</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default FunctionalComponent;
