/* eslint-disable react/style-prop-object */
import { Arrows, TextBox, Button, Modal } from "./components";
import { useSelector } from "react-redux";


const App = () => {
  const modal = useSelector(state => state.user.modal)
  return (
    <div className="app">
      {!modal && (
        <>
        <TextBox style='input'/>
          <Arrows />
        <TextBox style='output'/>
        </>
        )}
      {modal &&<Modal/>}
    </div>
  );
}

export default App;