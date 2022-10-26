import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <button
      {...props}
      onClick={props.changeTheme}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      Button
    </button>
  );
}
