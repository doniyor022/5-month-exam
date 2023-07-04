import { useRoutes } from 'react-router-dom';
import { Error } from '../pages/error';
import { Home } from '../pages/home/home';
import { SinglePage } from '../pages/post-single/post-single';

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/design',
    element: <>Design Theory</>,
  },
  {
    path: '/ux',
    element: <>UX</>,
  },
  {
    path: '/ui',
    element: <>UI</>,
  },
  {
    path: '/typography',
    element: <>Typography</>,
  },
  {
    path: '/post/:postId',
    element: <SinglePage />,
  },
  {
    path: '*',
    element: <Error />
  }
];

export const Routes = () =>{
  const elements = useRoutes(routes)

  return elements
}