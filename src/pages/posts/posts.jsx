import './posts.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PostsContext } from '../../context/posts';
import { PaginitionPosts } from '../../components/paginition';



export const Posts = () => {
  const { posts, pagInitionPosts  } = useContext(PostsContext);
  console.log(pagInitionPosts);
  return (
    <div className='container '>

      {posts.data.length > 0 && ( 
        <ul className="posts__list">
        {pagInitionPosts?.map((post) => <li key={post.id} className="posts__item">
          <div className='posts__wrapper'>
          <p className="posts__data">September 24.2020</p>
          <p className="posts__data">Typography</p>
          </div>
          <Link to={`/post/${post.id}`}>
            <h3 className="post__title">{post.title}</h3>
          </Link>
          <p className="posts__minutes">3 minutes read</p>
        </li>
        )}
      </ul>
      )}
      <PaginitionPosts />
    </div>
  )
}