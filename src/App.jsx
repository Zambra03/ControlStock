import React from 'react';
import BackLogin from './components/Back/BackLogin';
import Login from './views/Login';
import Register from './views/Register';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
      <section>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </section>
  )
}

export default App;
