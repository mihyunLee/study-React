import React from "react";

function UserGreeting(props) {
  return (
    <h2>
      Hello {props.name && props.name + ", "}
      {Boolean(props.count) && `Visit number ${props.count}`}
      {/* {props.count ? `Visit number ${props.count}` : null} */}
    </h2>
  );
}

function GuestGreeting() {
  return <h2>Please sign up</h2>;
}

function Greeting(props) {
  //   if (props.isLoggedIn) {
  //     return <UserGreeting name="mihyun" count={0} />;
  //   }
  //   return <GuestGreeting />;
  return props.isLoggedIn ? (
    <UserGreeting name="mihyun" count={0} />
  ) : (
    <GuestGreeting />
  );
}

const Condition = () => {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Condition;
