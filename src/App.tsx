import "./App.css";
import { Boxes } from "./components/Boxes";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <div className="heading">
          <h3>Countdown Till</h3>
          <h1>2023</h1>
        </div>
        <div className="contdown">
          <Boxes endDate={new Date(2023, 0, 1, 0, 0)} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
