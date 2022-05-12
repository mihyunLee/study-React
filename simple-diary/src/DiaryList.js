import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList }) => {
  return (
    <div className="DiaryList">
      <h1>DiaryList</h1>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
