import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  student1: {
    name: "김학생",
    description: "취업 준비생인 학생1",
  },
  student2: {
    name: "박학생",
    description: "재직중인 학생2",
  },
};

const Profile = () => {
  const { username } = useParams(); // 파라미터 받아오기
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
