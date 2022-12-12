import { useCowntDownButtons } from "../utils/hooks/buttons";
import { useWindowResize } from "../utils/hooks/resService";

export const Navbar = (props: { handleDate: (date: Date) => void }) => {

  const [width] = useWindowResize();
  const buttons = useCowntDownButtons();

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
