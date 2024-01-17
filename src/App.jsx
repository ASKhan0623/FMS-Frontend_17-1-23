import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  )
}

export default App
