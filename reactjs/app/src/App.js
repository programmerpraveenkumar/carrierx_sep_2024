import logo from './logo.svg';
import './App.css';
import {Home} from './Home'
import { About } from './About';
import { Contact } from './Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const  routerConfig = createBrowserRouter([
  {"path":"/home",element:<Home/>},
  {"path":"/about",element:<About/>},
  {"path":"/contact",element:<Contact/>}
]);

function App() {
  return (
    <div>
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
