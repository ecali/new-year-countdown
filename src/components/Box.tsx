import { Props } from "../utils/Model";


export const Box = (props: Props) => {
  return (
    <div className="box">
      <span className="num">{props.val}</span>
      <span className="text">{props.label}</span>
    </div>
  );
};
