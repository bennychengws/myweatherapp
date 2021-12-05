import React from "react";
import { useEffect, useState } from "react";
import BottomPanel from "./components/BottomPanel";
import DairyInput from "./components/Dairyinput";
import DateHeader from './components/date'
// import Temperature from "./components/Temperature"
import moduleCss from './style/App.css'


const App = () => {
  const [dateOfToday, setDateOfToday] = useState(new Date())
  useEffect(() => {
    setDateOfToday(new Date())
  }, [])

  return (
    <div className={moduleCss.div}>
      <DateHeader><div className="childrenText" DateOfToday={dateOfToday}></div></DateHeader>
      <DairyInput/>
      <BottomPanel/>
    </div>
  )
};

export default App;
