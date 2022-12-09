import { useState } from "react";
import "./App.css";
import { Boxes } from "./components/Boxes";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { Navbar } from "./components/NavBar";

function App() {
  const [date, setDate] = useState<Date>(new Date(2023, 0, 1, 0, 0));

  const handleDate  = (date: Date) => {
    setDate(date);
  } 

  return (
    <div className="App">
      <Navbar handleDate={handleDate}/>
      <div className="wrapper">
        <Heading date={date} />
        <div className="contdown">
          <Boxes endDate={date} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
