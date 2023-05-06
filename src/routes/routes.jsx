import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../views/Home';
import { Statistics } from '../views/Statistics';
import { Products } from '../views/Products';
import { Sidebar } from '../components/Sidebar/Sidebar';

function MyRoutes () {
  return (
    <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path= "/statistics" element = {<Statistics />} />
        <Route path= "/products" element = {<Products />} />
    </Routes>
  )
}

export default MyRoutes;
