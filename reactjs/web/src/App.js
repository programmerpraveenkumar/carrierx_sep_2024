import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Service } from './pages/Service';
import { Login } from './pages/Login';

const routerConfig = createBrowserRouter(
  [
    {"path":'/home','element':<Home/>},
    {"path":'/about','element':<About/>},
    {"path":'/service','element':<Service/>},
    {"path":'/login','element':<Login/>}
  ]
);
function App() {
  return (
    <div>
        <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
