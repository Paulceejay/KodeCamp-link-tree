import kodeCampLogo from "../assets/kodecamp.png"
import kodeHauzLogo from "../assets/kodehauz.png"
import "./Footer.css"

const Footer = () => {
    return (
      <footer className="footer">
        <div>
          <img src={kodeCampLogo} alt="" />
          <p>KodeCamp Internship Task</p>
          <img src={kodeHauzLogo} alt="Kodecamp Logo" />
        </div>
      </footer>
    );
}

export default Footer