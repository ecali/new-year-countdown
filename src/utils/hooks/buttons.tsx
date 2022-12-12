import { useState } from "react";
import { ButtonEntity } from "../Model";

export const useCowntDownButtons = (): ButtonEntity[] => {
  const now = new Date();
  const [buttons, setButtons] = useState<ButtonEntity[]>([]);

  let counter = 1;
  let xmasCounter = 0;
  for (let i = 0; i < 6; i++) {
    if (buttons.length < 6) {
      if (counter <= 3) {
        const label = now.getFullYear() + counter;
        setButtons((prevButton) => {
          return [
            ...prevButton,
            {
              label: label.toString(),
              date: new Date(label, 0, 1, 0, 0),
            },
          ];
        });
        counter = counter + 1;
      } else {
        const label = now.getFullYear() + xmasCounter;
        setButtons((prevButton) => {
          return [
            ...prevButton,
            {
              label: "XMas " + label.toString().slice(-2),
              date: new Date(label, 11, 25, 0, 0),
            },
          ];
        });
        xmasCounter = xmasCounter + 1;
      }
    }
  }
  return buttons;
};
