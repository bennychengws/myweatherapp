import React from "react";
import BottomPanel from "./components/BottomPanel";
import DairyInput from "./components/Dairyinput";
import DateHeader from './components/date'
// import Temperature from "./components/Temperature"
import moduleCss from './style/App.css'


const App = () => {
  return (
    <div className={moduleCss.div}>
      <DateHeader><div className="childrenText">1234</div></DateHeader>
      <DairyInput/>
      <BottomPanel/>
    </div>
  )
};

export default App;
