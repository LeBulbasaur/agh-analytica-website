import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContext } from "./context/context";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Recruitment from "./pages/recruitment/Recruitment";
import Project1 from "./pages/projects/project1/Project1";
import Project2 from "./pages/projects/project2/Project2";
import Project3 from "./pages/projects/project3/Project3";

function App() {
  const [language, setLanguage] = useState(
    window.localStorage.getItem("language")
      ? window.localStorage.getItem("language")
      : "english"
  );

  useEffect(() => {
    if (!window.localStorage.getItem("language")) {
      window.localStorage.setItem("language", "english");
    }
  }, []);

  return (
    <BrowserRouter>
      <LanguageContext.Provider
        value={{ language: language, setLanguage: setLanguage }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
          </Route>
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
