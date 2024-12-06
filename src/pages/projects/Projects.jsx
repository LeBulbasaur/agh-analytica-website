import "./projects.css";
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";

function Projects() {
  return (
    <div className="App">
      <div className="App__content">
        <Navbar />
        <div className="navbar__imitation" />
        <Main />
      </div>
      <footer>
        <p>@2024 AGH Analytica</p>
      </footer>
    </div>
  );
}

export default Projects;
