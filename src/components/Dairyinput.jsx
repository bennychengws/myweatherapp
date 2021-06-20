// import { MODULESPECIFIER_TYPES } from "@babel/types";
import React from "react";
import moduleCss from "../style/Dairyinput.module.css"

const DairyInput = () => {
  return (
    <textarea className={moduleCss.quote} 
    type="text"
    placeholder="It was the best day. &#10;ever with you." />  

  );
};

export default DairyInput;
