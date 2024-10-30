import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import List from './Components/List.js';
import InvoiceDetailCreate from './Components/InvoiceDetailCreate.js';
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {/* page with sidenavbar */}
          <Route path="/" element={<Home/>} />
          {/* page with list of invoice items */}
          <Route path="/List" element={<List/>}/>
          {/* pointing to create new invoice detail component create  */}
          <Route path="/InvoiceDetailCreate" element={<InvoiceDetailCreate/>}/>

        </Routes>

      </div>
    </>
  );
}

export default App;
