import kodeCampLogo from "../assets/kodecamp.png"
import kodeHauzLogo from "../assets/kodehauz.png"
import "./Footer.css"

const Footer = () => {
    return (
      <footer className="footer">
        <div>
          <img className="footerImg" src={kodeCampLogo} alt="KodeCamp Logo" />
          <p>KodeCamp Internship Task</p>
          <img className="footerImg" src={kodeHauzLogo} alt="KodeHauz Logo" />
        </div>
      </footer>
    );
}

export default Footer