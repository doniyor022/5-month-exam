import './footer.css'
import { Layout } from "antd";
import { Link, NavLink } from 'react-router-dom'

import footerLogo from '../../../../assets/img/footerLogo.svg'

const { Footer } = Layout;

export const FooterLayout = () => {
  return (
    <Footer style={{ backgroundColor: '#000000' }}>
      <div className="container footer__container">
        <Link to='/'>
          <img src={footerLogo} alt="footer-logo" />
        </Link>
        <div className='logo__wrapper'>
          <div className='back__box'></div>
        </div>



        <div className='footer__wrapper'>
          <ul className='footer__list'>
            <li className='footer__item'>
              <h3 className='footer__title'>FIGHT WITH ME ON:</h3>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Twitter</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Instagram</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Telegram</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>YouTube</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Figma</NavLink>
            </li>
          </ul>

          <ul className='footer__list'>
            <li className='footer__item'>
              <h3 className='footer__title'>WHAT I HAVE DONE:</h3>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Xalq Kutubxonasi</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Websitee</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Website</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Play Market</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>App Store</NavLink>
            </li>
          </ul>

          <ul className='footer__list'>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Contact</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Blog</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Dribbble</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink className='footer__link' to=''>Behance</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Footer>
  )
}