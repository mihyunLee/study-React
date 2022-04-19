import { useState, useEffect } from "react";
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("created😁");
    return () => console.log("destroyed🥲"); // clean-up, component가 사라질 때 실행된다.
  });
  return (
    <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..."
    ></input>
  );
};

function App() {
  const [counter, setCounter] = useState(0);
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter((prev) => prev + 1);
  const showButton = () => setShowing((prev) => !prev);

  console.log("i run all the time");
  // 컴포넌트가 최초 렌더링 될 때 한 번만 실행
  useEffect(() => {
    console.log("i run only once.");
  }, []);
  // dependency로 설정한 counter의 상태가 변화될 때마다 effect를 실행
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);

  return (
    <div>
      {showing ? <SearchBar /> : null}
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
      <button onClick={showButton}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
