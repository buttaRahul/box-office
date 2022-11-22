import React from 'react';
import {Routes,Route} from 'react-router-dom'

import './App.css'; 
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
     <Routes>
      <Route exact path='/' element={<Home />} />
      <Route  path='/starred' element={<Starred />} />
      <Route element={'404 page'}/>
     </Routes>
  );  
}

export default App;


// git remote add origin https://github.com/buttaRahul/box-office.git
// >> git push  origin  master