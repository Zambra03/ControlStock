import React, { useState } from 'react';
import BackLogin from './components/Back/BackLogin';
import Login from './views/Login';
import Register from './views/Register';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu/menu';

function App() {
  const [conectado, setConectado] = useState(false);
  
  return (
    conectado ? <Menu /> :
    <section>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </section>
  );
}

export default App;