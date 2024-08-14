import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/body/Home'
import Signup from './components/signup/Signup';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
  },
  {
    path : "/signup",
    element : <Signup/>
  }
]);
function App() {
  return <RouterProvider router={router} />
}

export default App
