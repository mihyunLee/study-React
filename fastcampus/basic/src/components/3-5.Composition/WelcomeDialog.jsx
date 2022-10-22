import React from "react";
import CustomDialog from "./CustomDialog";
import Dialog from "./Dialog";

// Dialog를 특수화하기
// 컴포넌트 합성을 통해 WelcomeDialog가 Dialog를 렌더링
const WelcomeDialog = () => {
  return (
    <div>
      <Dialog>
        <h1>Welcome</h1>
        <h5>Thank you!</h5>
      </Dialog>
      <CustomDialog title="Welcome" description="Thanks" />
    </div>
  );
};

export default WelcomeDialog;
