import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContext } from "./context/context";
import Home from "./pages/home/Home";
import Project1 from "./pages/projects/project1/Project1";
import Layout from "./pages/layout/Layout";

function App() {
  const [language, setLanguage] = useState(
    window.localStorage.getItem("language")
      ? window.localStorage.getItem("language")
      : "english"
  );

  useEffect(() => {
    if (window.localStorage.getItem("language")) {
      window.localStorage.setItem("language", "english");
    }
  }, []);

  return (
    <BrowserRouter>
      <LanguageContext.Provider
        value={{ language: language, setLanguage: setLanguage }}
      >
        <Routes>
          <Route index element={<Layout />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/layout" element={<Home />} />
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
