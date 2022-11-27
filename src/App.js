import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import './App.css'; 
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};


function App() {
  return (
    <ThemeProvider theme={theme}>
     <Routes>
      <Route exact path='/' element={<Home />} />
      <Route  exact path='/starred' element={<Starred />} />
      <Route  exact path='/show/:id' element={<Show />} />
      <Route element={'404 page'}/>
     </Routes>
     </ThemeProvider>
  );  
}

export default App;


// git remote add origin https://github.com/buttaRahul/box-office.git
// >> git push  origin  master