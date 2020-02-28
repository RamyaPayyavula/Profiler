import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

export const App = () => {
  return (
    <div id="parent-div">
      <h1>Adopt me</h1>
      <SearchParams />
      <br />
      <br />
      <Pet name="Rosy" animal="cat" breed="Whatever1" />
      <Pet name="Raj" animal="Dog" breed="Whatever2" />
      <Pet name="Marcel" animal="Monkey" breed="Whatever3" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
