import React from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { getTodos, postTodos } from "./my-api";

export default function QuickStart() {
  // useQueryClient: 감싸진 Provider에 있는 client에 접근
  const queryClient = useQueryClient();

  const query = useQuery(["todos"], getTodos);

  const mutation = useMutation(postTodos, {
    onSuccess: () => {
      // todos key를 가진 모든 쿼리 무효화
      // postTodos가 성공 시 todos로 맵핑된 useQuery api 함수가 실행
      queryClient.invalidateQueries("todos");
    },
  });

  if (query.isLoading) {
    return "Loading....";
  }

  if (query.error) {
    return "Error...";
  }

  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
