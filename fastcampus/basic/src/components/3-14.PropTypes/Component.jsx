import React from "react";
import PropTypes from "prop-types";

function PropComponent(props) {
  return <div>{props.name}</div>;
}

PropComponent.defaultProps = {
  name: "Jimmy",
  age: 20,
  grade: "A0",
};

PropComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  grade: function (props, propName, componentName) {
    // Validation Check
    // grade가 A+나, A0가 아닐 경우 Error 발생
    if (!/A+|A0/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
