// import axios from "axios";
// import React, {useState, useEffect} from "react";
import moduleCss from "../style/Temperature.module.css";
// import Weather from './icons/Weather';
import thermometer from "../thermometer.png"

const Temperature = ({data}) => {
  // const [seaTemp, setseaTemp] = useState()  


  return (
    <div className={moduleCss.container}>
      <div className={moduleCss.contentContainer}>
        <div className={moduleCss.tempDisplay}>
          <img src={thermometer} alt="thermometer" width="100px" height="100px">
            {/* <svg
              className={moduleCss.weatherIcon}
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <rect
                  x="4"
                  y="10"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#FFD600"
                />
              </g>
              <g filter="url(#filter1_d)">
                <rect
                  x="28"
                  y="42"
                  width="40"
                  height="20"
                  rx="10"
                  fill="#E6E9F3"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="6"
                  width="56"
                  height="56"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d"
                  x="24"
                  y="38"
                  width="48"
                  height="28"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg> */}
          </img>
          <div className={moduleCss.nowBox}>
            <div className={moduleCss.nowAndSoilTemp}>Now</div>
            <div>
              <div className={moduleCss.degree}>{data.seaTemp}??C</div>
              <div className={moduleCss.bottomInfo}>Sea Temp</div>
            </div>
          </div>
          <div className={moduleCss.soilBox}>
            <div className={moduleCss.nowAndSoilTemp}>Soil Temp</div>
            <div className={moduleCss.tempDisplay}>
              <div>
                <div className={moduleCss.degree}>{data.soilTemp1}??</div>
                <div className={moduleCss.bottomInfo}>0.5 M</div>
              </div>
              <div className={moduleCss.oneMeterDegree}>
                <div className={moduleCss.degree}>{data.soilTemp2}??</div>
                <div className={moduleCss.bottomInfo}>1.0 M</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
