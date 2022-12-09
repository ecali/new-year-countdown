import { useContext } from "react";
export const Navbar = () => {
    return (
    <div className="navbar">
      <div className="navbar-year">
        <button className="button-change" >2023</button>
        <button className="button-change">2024</button>
        <button className="button-change">2025</button>
      </div>
      <div className="navbar-xmas">
        <button className="button-change">XMas 2023</button>
        <button className="button-change">XMas 2024</button>
        <button className="button-change">XMas 2025</button>
      </div>
    </div>
  );
};
