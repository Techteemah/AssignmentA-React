import LogoData from '../assets/images/client-databiz.svg'
import LogoAudio from '../assets/images/client-audiophile.svg'
import LogoMeet from '../assets/images/client-meet.svg'
import LogoMaker from '../assets/images/client-maker.svg'
const Footer = () => (
  <footer>
    <div className="logos">
      <img src={LogoData} alt="" />
      <img src={LogoAudio} alt="" />
      <img src={LogoMeet} alt="" />
      <img src={LogoMaker} alt="" />
    </div>
  </footer>
);

export default Footer;
