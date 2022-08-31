import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams(); // 쿼리 스트링 받아오기
  const detail = searchParams.get("detail") === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>추가적인 정보가 보이고 있나요??</p>}
    </div>
  );
};

export default About;
