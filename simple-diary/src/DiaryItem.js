import { useRef, useState } from "react";

const DiaryItem = ({
  onEdit,
  onRemove,
  id,
  author,
  content,
  created_date,
  emotion,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localCotent, setLocalContent] = useState(content);

  const localContentInput = useRef();

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleEdit = () => {
    if (localCotent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localCotent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {author} | 감정점수: {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localCotent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleEdit}>수정 완료</button>
          <button onClick={handleQuitEdit}>수정 취소</button>
        </>
      ) : (
        <>
          <button onClick={toggleIsEdit}>수정하기</button>
          <button onClick={handleRemove}>삭제하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
