import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/Hello";

import './style.scss';

ReactDOM.render(
    <Hello name="Roman" />,
    document.getElementById("root")
);