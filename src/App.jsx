import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [language, setLanguage] = useState("english");

  return (
    <div className="App">
      <div className="App__content">
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="navbar__imitation" />
        <Main language={language} />
      </div>
      <footer>
        <p>@2024 AGH Analytica</p>
      </footer>
    </div>
  );
}

export default App;
