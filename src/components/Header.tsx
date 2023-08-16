import profileImg from "../assets/profile__img.png";
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={profileImg} alt="Profile image" />
        <h2>John Doe</h2>
      </div>
    </header>
  );
};

export default Header;
