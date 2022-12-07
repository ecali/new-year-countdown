import React, { useEffect, useState } from "react";
import "./App.css";
import { Box } from "./components/Box";
import { Props } from "./utils/Model";

function App() {
  const [expired, setExpired] = useState(false);
  const [boxes, setBoxes] = useState<Props[]>();

  const endDate = new Date(2023, 0, 1, 0, 0);
  const endTime = endDate.getTime();

  const labels = ["Days", "Hours", "Minutes", "Seconds"];

  useEffect(() => {
    const interval = setInterval(conutdown, 1000);
    return () => clearInterval(interval);
  });

  const conutdown = () => {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = (num: number) => (num < 10 ? Number(`0${num}`) : num);
    if (endTime < todayTime) {
      setExpired(true);
    } else {
      setBoxes([
        {
          val: addZeroes(Math.floor(remainingTime / oneDay)),
          label: labels[0],
        },
        {
          val: addZeroes(Math.floor((remainingTime % oneDay) / oneHr)),
          label: labels[1],
        },
        {
          val: addZeroes(Math.floor((remainingTime % oneHr) / oneMin)),
          label: labels[2],
        },
        {
          val: addZeroes(Math.floor((remainingTime % oneMin) / 1000)),
          label: labels[3],
        },
      ]);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="heading">
          <h3>Countdown Till</h3>
          <h1>2023</h1>
        </div>
        <div className="contdown">
          {expired ? (
            <h1>Countdown Has Expired</h1>
          ) : (
            boxes?.map((box, key) => <Box key={key} label={box.label} val={box.val} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
