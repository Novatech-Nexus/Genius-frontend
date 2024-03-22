import {createBrowserRouter, RouterProvider} from 'react-router-dom';


/**Import all routes */
import Home from './components/Home';
import Username from './components/Username';
import Register from './components/Register';
import Profile from './components/Profile';
import Password from './components/Password';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';

/**Root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
   {
    path: '/username',
    element: <Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
])


function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
