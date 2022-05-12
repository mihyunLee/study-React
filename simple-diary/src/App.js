import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "myoni",
    content: "hihihi~",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "kim",
    content: "i'm kim!",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "lee",
    content: "i'm lee!",
    emotion: 4,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
