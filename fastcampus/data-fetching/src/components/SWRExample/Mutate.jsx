import axios from "axios";
import React from "react";
import useSWR, { SWRConfig, useSWRConfig } from "swr";

export default function Mutate() {
  return (
    <SWRConfig>
      <Page />
    </SWRConfig>
  );
}

const fetcher = (url) => axios.get(url).then((res) => res.data);

const updateFn = (data) => data;

const Page = () => {
  const { data } = useSWR("/api/user/123", fetcher);
  const { mutate } = useSWRConfig();

  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();
          const user = { ...data, name: newName };
          const options = { optimisticData: user, rollbackOnError: true };

          // 로컬 데이터를 즉시 업데이트하고
          // 데이터 업데이트 요청을 전송하고
          // 로컬 데이터가 올바른지 확인하기 위해 갱신(다시 가져오기)을 트리거합니다.
          mutate("/api/user/123", updateFn(user), options);
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
};
