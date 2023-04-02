/* eslint-disable react/style-prop-object */
import { useState } from "react";
import { Arrows, TextBox, Button, Modal } from "./components";

const App = () => {

  const [input, setInput] = useState('English');
  const [output, setOutput] = useState('Portuguese');

  const handleClick = () => {
    setInput(output);
    setOutput(input);
  };

  return (
    <div className="app">
      <TextBox style='input' language={input}/>
      <div className="arrow-container" onClick={handleClick}>
        <Arrows />
      </div>
      <TextBox style='output' language={output}/>
    </div>
  );
}

export default App;
