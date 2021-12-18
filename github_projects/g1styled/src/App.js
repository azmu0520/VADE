import React from 'react';
import Navbar from './Component/Navbar';

import './app.css';
import SubNav from './Component/SubNav';
import Body from './Component/Body';
const App = () => {
  return (
    <div className='wrap'>
      <Navbar />
      <SubNav />
      <Body />
    </div>
  );
};

export default App;
