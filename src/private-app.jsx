
import { PostProvider } from './context';
import { Routes } from './routes/routes';

export const PrivateApp = () => {
  return (
  <>
  <PostProvider>
    <Routes />
  </PostProvider>
  </>
  )
};