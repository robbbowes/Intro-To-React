import React from "react";
import ReactDOM from "react-dom";
import FilmBox from "./components/FilmBox.jsx";

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <FilmBox />,
    document.getElementById("app")
  )
})
