import LogoSnap from '../assets/images/logo.svg'
const Header = () => {
  return (
    <header>
      <nav className='navi'>
        
        <div className='rightNav'>
        <img src={LogoSnap} alt="" />
        <ul>
          <li><a href="">Features</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">About</a></li>
        </ul>
       
        </div>
        
        <div className='leftNav'>
          <a href="#">Login</a>
          <button>Register</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
