import React, { Profiler, useState, useMemo } from "react";
import "./CommentItem.css";

function CommentItem({ title, content, likes, onClick }) {
  const [clickedCount, setClickedCount] = useState(0);

  function onRenderCallback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) {
    // 렌더링 타이밍을 집합하거나 로그...
    console.log(`actualDuration(${title}: ${actualDuration})`);
  }

  const handleClick = () => {
    onClick();
    setClickedCount((prev) => prev + 1);
    alert(`${title} clicked`);
  };

  // 계산된 특정 "값"을 memoization 할 때는 useMemo를 사용한다.
  // useMemo를 사용하기 전에는 click되어 컴포넌트의 상태가 변경되었을 때
  // 변경된 상태의 CommentItem이 다시 렌더링 되었다.
  // useMemo를 사용하면 clickedCount가 변경되고 rate check를 하여 rate 값만 적용할 뿐
  // 클릭된 CommentItem이 리렌더링 되지 않는다.
  const rate = useMemo(() => {
    console.log("rate check");
    return likes > 10 ? "Good" : "bad";
  }, [likes]);

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="CommentItem" onClick={handleClick}>
        <p>{title}</p>
        <p>{content}</p>
        <p>{likes}</p>
        <p>{rate}</p>
        <p>{clickedCount}</p>
      </div>
    </Profiler>
  );
}
// memo를 해주기 전에는 새로 생성되는 CommentItem 뿐만 아니라 기존의 CommentItem도 새로 그려준다.
// memo를 해주면 새로 생성되는 CommentItem만 렌더링된다.
export default React.memo(CommentItem);
