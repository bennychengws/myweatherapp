import React from "react";
import moment from "moment";
import moduleCss from "../style/DateHeader.module.css"

const date = ({DateOfToday}) => {
  return (
    <div className={moduleCss.container}>
      {/* <div className={moduleCss.nav}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 4H2V6H22V4ZM22 11C22 12.1046 21.1046 13 20 13C18.8954 13 18 12.1046 18 11C18 9.89543 18.8954 9 20 9C21.1046 9 22 9.89543 22 11ZM6 18C6 19.1046 5.10457 20 4 20C2.89543 20 2 19.1046 2 18C2 16.8954 2.89543 16 4 16C5.10457 16 6 16.8954 6 18ZM12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20ZM22 18C22 19.1046 21.1046 20 20 20C18.8954 20 18 19.1046 18 18C18 16.8954 18.8954 16 20 16C21.1046 16 22 16.8954 22 18ZM6 11C6 12.1046 5.10457 13 4 13C2.89543 13 2 12.1046 2 11C2 9.89543 2.89543 9 4 9C5.10457 9 6 9.89543 6 11ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
            fill="white"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 6H2V8H22V6ZM22 16H2V18H22V16Z"
            fill="white"
          />
        </svg>
      </div> */}
      {/* <div className={`${moduleCss.weekday} ${moduleCss.childrenText}`}>Tomorrow</div> */}
      <div className={moduleCss.weekday}>Today</div>
      {/* {children} */}
      <div className={moduleCss.date}>
        <div className={moduleCss.day}>{moment(DateOfToday).format("DD")}</div>
        <div className={moduleCss.monthYear}>
            <div>{moment(DateOfToday).format("MMM")}</div>
            {moment(DateOfToday).format("YYYY")}
            </div>
      </div>
    </div>
  );
};

export default date;
