import './sidebar.css'
import { Link } from 'react-router-dom'
import { Layout } from "antd";


import facebook from '../../../../assets/img/facebook.svg';
import github from '../../../../assets/img/GitHub.svg';
import twitter from '../../../../assets/img/twitter.svg';
import linkedin from '../../../../assets/img/linkedin.svg';


const { Sider } = Layout;

export const SidebarLayout = () => {
  return (
    <Sider
      width={500}
      style={{ background: "#ffff", minHeight: "100vh", minWidth: "330px" }}
    >
      <div className="container ">
        <div className="sidebar__wrapper ">
          <h3 className="sidebar__title">What I do!</h3>
          <p className='sidebar__desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            aliquet, orci in bibendum luctus, turpis ante pretium velit, eu
            rutrum augue erat ac eros. Cras ultricies mattis convallis.
          </p>
          <Link style={{color: '#474747'}} className='explore' to=''>EXPLORE ME </Link>
        </div>
        <div className='socials'>
          <Link className='socials__link' to=''>
            <img src={facebook} alt="facebook-link" width={15} />
          </Link>
          <Link className='socials__link' to=''>
            <img src={github} alt="facebook-link" width={25} />
          </Link>
          <Link className='socials__link' to=''>
            <img src={twitter} alt="facebook-link" width={25} />
          </Link>
          <Link className='socials__link' to=''>
            <img src={linkedin} alt="facebook-link" width={30} />
          </Link>
        </div>
      </div>
    </Sider>
  );
};