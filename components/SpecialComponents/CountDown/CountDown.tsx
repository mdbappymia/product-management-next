import React, { useState, useRef, useEffect, useCallback } from "react";

const CountDown = () => {
  const [time, setTime] = useState("");
  setInterval(() => {
    const totalSec: number =
      (+new Date("2022-09-30T12:01:04.753Z") - +new Date()) / 1000;

    const hour = totalSec / 3600;
    const remainAfterHour = totalSec % 3600;
    const min = remainAfterHour / 60;
    const remainSec = parseInt(remainAfterHour % 60);
    setTime(
      `${parseInt(hour)}:${parseInt(min)}:${
        remainSec.toString().length === 1 ? "0" + remainSec : remainSec
      }`
    );
  }, 1000);
  return (
    <div className="App">
      <h2>
        H:
        {time}
      </h2>
    </div>
  );
};

export default CountDown;
