
import { MainLayout } from '../../components/layouts/main-layout'
import { Posts } from '../posts';
import './home.css';

export const Home = () => {
  return (
    <MainLayout>

      <div className="container ">
        <h1 className='posts__title'>Recent Posts</h1>
        
        <Posts />
      </div>
    </MainLayout>
  )
}