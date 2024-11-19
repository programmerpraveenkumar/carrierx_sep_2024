import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Service } from './pages/Service';
import { Login } from './pages/Login';
import Home2 from './pages/Home2';
import { Provider } from 'react-redux';
import { myStore } from './config/reduxconfig';

const routerConfig = createBrowserRouter(
  [
    {"path":'/home','element':<Home/>},
    {"path":'/home2','element':<Home2/>},
    {"path":'/about','element':<About/>},
    {"path":'/service','element':<Service/>},
    {"path":'/login','element':<Login/>}
  ]
);
function App() {
  return (
    <Provider store={myStore}>
    <div>
        <RouterProvider router={routerConfig} />
    </div>
    </Provider>
  );
}

export default App;
