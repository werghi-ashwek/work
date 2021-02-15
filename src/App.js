import React from 'react';
import './App.css'; 

import NavBar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';
import MainRouter from "./MainRouter";




export default function App() {
  return (
    <div>
     
     <NavBar></NavBar>
     <MainRouter />
     <Footer></Footer>
     
    
     
     </div>
  );
 }
    
