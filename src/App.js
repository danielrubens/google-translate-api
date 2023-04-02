/* eslint-disable react/style-prop-object */
import { useState } from "react";
import { Arrows, TextBox, Button, Modal } from "./components";

const App = () => {
  return (
    <div className="app">
      <TextBox style='input'/>
        <Arrows />
      <TextBox style='output'/>
    </div>
  );
}

export default App;