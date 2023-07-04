import './header.scss';

import { Layout, } from "antd"
import { Link, NavLink } from 'react-router-dom'

import { useContext, useRef } from 'react';
import { PostsContext } from '../../../../context';

import logo from '../../../../assets/img/logo.png';
import searchImg from '../../../../assets/img/searchImg.svg'
const { Header: AntdHeader } = Layout

export const Header = () => {
  const { posts, setFilteredPosts } = useContext(PostsContext);
  const inputRef = useRef();
  const handleFilterSubmit = (evt) => {
    evt.preventDefault();

    const inputValue = inputRef.current.value;
    
    const filteredPosts = posts.data.filter((posts) => (
      posts.title.includes(inputValue)
      ))
      setFilteredPosts(filteredPosts)
      if (!filteredPosts) {
        return null
      }
  }
  
  

  return (
    <AntdHeader style={{ backgroundColor: '#fff', height: '110px' }}>
      <div className="container header__container">
        <Link className='logo' to='/'>
          <img className='logo-img' src={logo} alt="site-logo" />
        </Link>

        <nav className='header__nav'>
          <ul className='header__list'>
            <li className='header__item'>
              <NavLink className={(params) => `header__link ${params.isActive ? 'link-active' : ''}`} to='/'>All</NavLink>
            </li>
            <li className='header__item'>
              <NavLink className={(params) => `header__link ${params.isActive ? 'link-active' : ''}`} to='/design'>Design Theory</NavLink>
            </li>
            <li className='header__item'>
              <NavLink className={(params) => `header__link ${params.isActive ? 'link-active' : ''}`} to='/ux'>UX</NavLink>
            </li>
            <li className='header__item'>
              <NavLink className={(params) => `header__link ${params.isActive ? 'link-active' : ''}`} to='/ui'>UI</NavLink>
            </li>
            <li className='header__item'>
              <NavLink className={(params) => `header__link ${params.isActive ? 'link-active' : ''}`} to='/typography'>Typography</NavLink>
            </li>
          </ul>
        </nav>
        
        
        <form
          onSubmit={handleFilterSubmit}
          method="get"
          className="search__form"
        >
          <input
            ref={inputRef}
            className="search__input"
            type="search"
            placeholder="Search"
          />
          <button className="search__button">
            <img className='search__img' src={searchImg} alt="" />
          </button>
        </form>
        {/* <button class="header__burger toggle">
        <span class="header__burger-inner"></span>
      </button> */}
      </div>
    </AntdHeader>
  )
}