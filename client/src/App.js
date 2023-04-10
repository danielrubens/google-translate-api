/* eslint-disable react/style-prop-object */
import { useSelector } from "react-redux";
import { Arrows, TextBox, Modal } from "./components";


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