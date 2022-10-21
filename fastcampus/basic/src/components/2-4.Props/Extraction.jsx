import React from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  // Commnet 컴포넌트에서 추출되어 만들어짐.
  // 추출된 컴포넌트에서 props의 이름은 컴포넌트 자체의 관점으로 짓기
  // ex. Comment: author => Avatar: user
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  // 컴포넌트를 추출하면 재사용성이 증가한다.
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

const Extraction = () => {
  return (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  );
};

export default Extraction;
