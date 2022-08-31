import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/student1">Student1</Link>
        </li>
        <li>
          <Link to="/profiles/student2">Student2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={"유저를 선택해주세요"} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
