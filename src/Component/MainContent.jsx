import HeroImage from '../assets/images/image-hero-desktop.png'
const MainContent = () =>{
    return(
        <div className="mainBox">
            <div className='textContent'>
            <h1>Make <br /> remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline <br /> processes, create team rituals, and watch productivity soar.</p>
            <button>Learn More</button>
            </div>

            <div className="image-section">
            <img src={HeroImage} alt="RemoteWorkLogo" />
            </div>
        </div>
    )    
}
export default MainContent