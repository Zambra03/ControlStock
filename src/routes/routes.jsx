import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../views/Home';
import { Statistics } from '../views/Statistics';
import { Products } from '../views/Products';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Logout } from '../views/Logout';
import { Configuration } from '../views/Configuration';
import { Users } from '../views/Users';

function MyRoutes () {
  return (
    <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path= "/statistics" element = {<Statistics />} />
        <Route path= "/products" element = {<Products />} />
        <Route path= "/configuration" element = {<Configuration />} />
        <Route path= "/logout" element = {<Logout />} />
        <Route path= "/users" element = {<Users />} />
    </Routes>
  )
}

export default MyRoutes;
