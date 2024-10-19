import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar__body">
      <div className="navbar__box">
        <p>Contents</p>
        <ol className="navbar__contents">
          <li>Information</li>
          <li>Projects</li>
          <li>
            <ul className="navbar__contents__projects">
              <li>- Developer AI</li>
              <li>- ShoeTracker</li>
              <li>- LoremIpsum</li>
            </ul>
          </li>
          <li>Contact</li>
        </ol>
        <div className="navbar__language">
          <p>🇵🇱 🇬🇧</p>
        </div>
      </div>
    </div>
  );
}
