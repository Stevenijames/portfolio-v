import './App.css';
import { RouterProvider, createBrowserRouter, Navigate, Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "*",
      element:  <Navigate to="/" />,
    },
  ]);

function App() {

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
