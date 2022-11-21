import React from 'react';
import {Routes,Route} from 'react-router-dom'

import './App.css'; 

function App() {
  return (
     <Routes>
      <Route exact path='/' element={'home page'} />
      <Route  path='/starred' element='starred page' />
      <Route element={'404 page'}/>
     </Routes>
  );  
}

export default App;
