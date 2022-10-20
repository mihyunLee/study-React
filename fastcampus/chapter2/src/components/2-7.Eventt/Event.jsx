import React from "react";

const Event = () => {
  // 캡처링이 동작한 후, 버블링이 동작한다.

  // 동작순서 (3)
  const handleButtonClick = () => {
    console.log("handleButtonClick");
  };

  // 동작순서 (1)
  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };

  // 동작순서 (2)
  const handleClickCapture2 = () => {
    console.log("handleClickCapture2");
  };

  // 동작순서 (4)
  const handleClickBubble = () => {
    console.log("handleClickBubble");
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </div>
  );
};

export default Event;
