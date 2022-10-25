import React from "react";
import { useCallback } from "react";
import CommentItem from "./CommentItem";

export default function Comments({ commentList }) {
  // 자식 컴포넌트로 함수를 전달하면 해당 함수는 계속해서 렌더링된다.
  // 따라서 자식 컴포넌트가 memoization 되었더라도
  // memoization이 제대로 적용되지 않는다.
  // 이 때, useCallback을 사용하여 memoization된 콜백 함수를 반환해준다.
  const onClick = useCallback(() => console.log("클릭"), []);

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.id}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
