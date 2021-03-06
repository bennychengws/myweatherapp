import React from "react";
import moduleCss from "../style/LocationPin.module.css";


const LocationPin = () => {
  return (
    <div className={moduleCss.container}>
      <div className={moduleCss.contentContainer}>
        <div className={moduleCss.location}>
          <div className={moduleCss.locationIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9.7C19 12.6206 17.2096 15.459 15.2526 17.6606C14.2913 18.7421 13.327 19.6284 12.6024 20.2443C12.3746 20.4379 12.1712 20.6042 12 20.7408C11.8288 20.6042 11.6254 20.4379 11.3976 20.2443C10.673 19.6284 9.70874 18.7421 8.74741 17.6606C6.79038 15.459 5 12.6206 5 9.7C5 6.03537 8.09764 3 12 3C15.9024 3 19 6.03537 19 9.7Z"
                stroke="black"
                strokeWidth="2"
              />
              <circle cx="12" cy="10" r="3" fill="black" />
            </svg>
          </div>
          <div className={moduleCss.hk}>Hong Kong</div>
        </div>
      </div>
    </div>
  );
};

export default LocationPin;
