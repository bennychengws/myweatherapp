import React, { useState, useEffect } from "react";
import LocationPin from "./LocationPin";
import Temperature from "./Temperature";
import axios from "axios";
import moduleCss from "../style/BottomPanel.module.css";

const BottomPanel = () => {
  const [weatherTemp, setWeatherTemp] = useState({
    seaTemp: 0,
    soilTemp1: 0,
    soilTemp2: 0,
  });
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en"
      );
      // console.log(res.data)
      setWeatherTemp(() => ({
        // ...weatherTemp,
        seaTemp: res.data.seaTemp.value,
        soilTemp1: res.data.soilTemp[0].value,
        soilTemp2: res.data.soilTemp[1].value,
      }));
    }
    fetchData();
  }, []);

  return (
    <div className={moduleCss.container}>
      <LocationPin />
      <Temperature data={weatherTemp} />
    </div>
  );
};

export default BottomPanel;
