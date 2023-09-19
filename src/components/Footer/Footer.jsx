import './footer.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import logo from '../../assets/logoLuisFernandoDAW.png'

export const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={facebook} alt="facebook"  />
                <img src={instagram} alt="instagram"  />
                <img src={youtube} alt="youtube"  />
                <img src={twitter} alt="twitter"  />
                </div>
        </div>
        <div className="logo-f">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}
