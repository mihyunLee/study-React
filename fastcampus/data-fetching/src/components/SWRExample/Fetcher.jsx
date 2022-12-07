import React from "react";
import useSWR, { SWRConfig } from "swr";
import axios from "axios";

export default function Fetcher() {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) => axios.get(...args).then((res) => res.data),
      }}
    >
      <Page />
    </SWRConfig>
  );
}

const Page = () => {
  // SWRConfig에 value로 fetcher를 주었기 때문에
  // useSWR에 인자로 fetcher를 전달하지 않아도 된다.
  const { data, error } = useSWR("api/user/123", {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.message.includes(404)) {
        alert(404);
        return;
      }

      if (retryCount >= 3) {
        return;
      }

      setTimeout(() => revalidate({ retryCount }), 1000);
    },
  });

  if (error) {
    return <div>error...</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return <div>{data.name}</div>;
};
