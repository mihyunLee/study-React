import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          headText={"App"}
          leftChild={
            <Button text="왼쪽 버튼" onClick={() => alert("왼쪽 버튼")} />
          }
          rightChild={
            <Button text="오른쪽 버튼" onClick={() => alert("오른쪽 버튼")} />
          }
        />
        <h1>Hello, React!</h1>
        <Button
          text={"버튼"}
          type={"default"}
          onClick={() => alert("버튼 클릭!")}
        />
        <Button
          text={"버튼"}
          type={"negative"}
          onClick={() => alert("버튼 클릭!")}
        />
        <Button
          text={"버튼"}
          type={"positive"}
          onClick={() => alert("버튼 클릭!")}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
