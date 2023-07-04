import './error.css'
import { Header } from "../../components/layouts/main-layout/header/header";
import {Link} from 'react-router-dom'
import errorImg from '../../assets/img/error.png'
import right from '../../assets/img/right.svg'

export const Error = () => {
  return(
    <>
    <Header />
    <div className="container error__container">
      <img src={errorImg} alt="" />
      <h2 className="error__title">Page not found - 404</h2>
      <p className="error__desc">This page not found (deleted or never exists).Try a phrase in search box or back to home and start again.</p>
      <Link className='error__link' to='/'>TAKE ME HOME! <img src={right} alt="" /></Link>

    </div>
    </>
    
  )
}