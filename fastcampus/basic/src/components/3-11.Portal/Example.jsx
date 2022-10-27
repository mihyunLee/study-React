import React from "react";
import { createPortal } from "react-dom";
import ThankyouDialog from "./ThankyouDialog";

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

export default function Example() {
  return (
    // Portal은 현재 root가 아닌 따로 존재하고 있음에도,
    // 이벤트 버블링이 적용된다.
    // 따라서 ThankyouDialog 내부에서 이벤트가 발생하면
    // 콘솔에 Event Bubbling이 출력된다.
    <div onClick={() => console.log("Event Bubbling")}>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{ position: "absolute" }}>
        <button>Hi!</button>
      </div>
    </div>
  );
}
