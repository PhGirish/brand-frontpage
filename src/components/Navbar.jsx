import "../assets/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <img src="nike-logo.svg" className="logo" />
        <div className="nav-list">
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="butt-div">
          <button className="nav-button">Login</button>
        </div>
      </div>
    </>
  );
}
