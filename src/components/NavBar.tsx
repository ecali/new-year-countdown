export const Navbar = (props:{handleDate: (date: Date)=> void}) => {
    const now = new Date();
    return (
    <div className="navbar">
      <div className="navbar-year">
        <button className="button-change" onClick={() => props.handleDate(new Date(now.getFullYear() + 1, 0, 1, 0, 0))}>{now.getFullYear() + 1}</button>
        <button className="button-change" onClick={() => props.handleDate(new Date(now.getFullYear() + 2, 0, 1, 0, 0))}>{now.getFullYear() + 2}</button>
        <button className="button-change" onClick={() => props.handleDate(new Date(now.getFullYear() + 3, 0, 1, 0, 0))}>{now.getFullYear() + 3}</button>
      </div>
      <div className="navbar-xmas">
        <button className="button-change" onClick={() => props.handleDate(new Date(now.getFullYear() + 0, 11, 25, 0, 0))}>XMas {now.getFullYear() }</button>
        <button className="button-change" onClick={() => props.handleDate(new Date(now.getFullYear() + 1, 11, 25, 0, 0))}>XMas {now.getFullYear() + 1}</button>
        <button className="button-change" onClick={() => props.handleDate(new Date(now.getFullYear() + 2, 11, 25, 0, 0))}>XMas {now.getFullYear() + 2}</button>
      </div>
    </div>
  );
};
