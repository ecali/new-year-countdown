import { useLayoutEffect, useState } from "react";

export const Navbar = (props: { handleDate: (date: Date) => void }) => {
  const now = new Date();
  const [buttons, setButtons] = useState<ButtonEntity[]>([]);

  const fillButtons = () => {
    let counter = 1;
    let xmasCounter = 0;
    for (let i = 0; i < 6; i++) {
      if (buttons.length < 6) {
        if (counter <= 3) {
          addToButtons(now.getFullYear() + counter);
          counter = counter + 1;
        } else {
          addToButtons(now.getFullYear() + xmasCounter, true);
          xmasCounter = xmasCounter + 1;
        }
      }
    }
  };

  const addToButtons = (label: number, xmas = false) => {
    const button: ButtonEntity = {
      label: xmas ? "XMas " + label.toString().slice(-2) : label.toString(),
      date: xmas ? new Date(label, 11, 25, 0, 0) : new Date(label, 0, 1, 0, 0),
    };
    setButtons((prevButton) => {
      return [...prevButton, button];
    });
  };

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      setButtons([]);
      fillButtons();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width] = useWindowSize();

  return (
    <div className="navbar">
      {buttons?.map((button, key) => {
        return width < 930 ? (
          key % 3 !== 0 ? (
            <button
              className="button-change"
              key={key}
              onClick={() => props.handleDate(button.date)}
            >
              {button.label}
            </button>
          ) : (
            ""
          )
        ) : (
          <button
            className="button-change"
            key={key}
            onClick={() => props.handleDate(button.date)}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
};

interface ButtonEntity {
  label: string;
  date: Date;
}
