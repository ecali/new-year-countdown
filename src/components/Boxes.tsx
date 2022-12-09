import { useEffect, useState } from "react";
import { Props } from "../utils/Model";
import { Box } from "./Box";

export const Boxes = (props: { endDate: Date }) => {
  const [expired, setExpired] = useState(false);
  const [boxes, setBoxes] = useState<Props[]>();
  const labels = ["Days", "Hours", "Minutes", "Seconds"];

  const endTime = props.endDate.getTime();

  useEffect(() => {
    const interval = setInterval(conutdown, 1000);
    return () => clearInterval(interval);
  });

  const addZeroes = (num: number) => {
    return Number(String(num).padStart(2, '0'));
  };

  const conutdown = () => {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

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
    <>
      {expired ? (
        <h1>Countdown Has Expired</h1>
      ) : (
        boxes?.map((box, key) => (
          <Box key={key} label={box.label} val={box.val} />
        ))
      )}
    </>
  );
};
