import React from "react";
import { render } from "react-dom";

lintingShouldCatchThisAs_no_undef = 4;

function Hi() {
  debugger;
  return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));
