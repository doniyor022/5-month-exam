import './post-single.css'
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { Layout } from "antd";
import { Header } from "../../components/layouts/main-layout/header";

 import singleImg from '../../assets/img/singleImg.jpg'
import { FooterLayout } from '../../components/layouts/main-layout/footer';

export const SinglePage = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({});
  
  useEffect(() => {
    ;(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (res.ok) {
       return setPost(await res.json())
      }
      console.error({status: res.status, message: res.statusText});
    })()
  }, [postId])

  return(
    <>
    <Layout>
      <Header />
    </Layout>
    <div className="container">
      <div className="postSingle__wrapper">
        <p className='interface'>User interface</p>
        <h2 className='post__title'>{post.title}</h2>
        <div className='post__wrapper'>
          <p className="post__data">September 24.2020,</p>
          <p className="post__minutes">3 minutes read</p>
        </div>
        <img className='singleImg' src={singleImg} alt=""  />
        <p className='post__body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt massa erat porttitor odio, non imperdiet dui risus et elit. </p>
        <h3 className='postSingle__title'>Information overload</h3>
        <p className='post__body'>Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit.uz nulla, viverra id suscipit quis, tristique a dolor. </p>
        <h3 className='postSingle__title'>‘Designing For Sustainability, Tim Frick, 2014'</h3>
        <h3 className='postSingle__title'>Lessons Learnt: Best Practice</h3>
          <p className='post__body'>Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.</p>
          <p className='post__body'>Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.</p>
          <h2 className='more__title'>More like this</h2>
      </div>
    </div>
    <Layout>
      <FooterLayout />
    </Layout>
    </>
  )
}