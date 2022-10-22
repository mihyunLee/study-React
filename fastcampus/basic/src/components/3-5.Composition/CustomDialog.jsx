import React from "react";
import Dialog from "./Dialog";

const CustomDialog = (props) => {
  return (
    <Dialog>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </Dialog>
  );
};

export default CustomDialog;
