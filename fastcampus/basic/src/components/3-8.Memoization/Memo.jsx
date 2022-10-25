import React, { useState, useEffect } from "react";
import Comments from "./Comments";

const commentList = [
  { title: "commnet1", content: "message1", likes: 1 },
  { title: "commnet2", content: "message2", likes: 2 },
  { title: "commnet3", content: "message3", likes: 3 },
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);

  // Comments에 전달되는 상태가 3초마다 계속 업데이트된다.
  // 따라서 Comments에 그려지는 CommentItem에 memoization이 필요할 것
  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComment) => [
        ...prevComment,
        {
          title: `comment${prevComment.length + 1}`,
          content: `meesage${prevComment.length + 1}`,
          likes: prevComment.length + 1,
        },
      ]);
    }, [3000]);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Comments commentList={comments} />;
}
