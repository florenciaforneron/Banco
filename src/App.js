
import React, { Component } from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Home from './components/home/index';
import { push as Menu } from 'react-burger-menu';
import Agentedecuenta from './components/agentedecuenta/index';
import Cliente from './components/cliente/index';
import Navigation from './components/navigation/index'
import Administrador from './components/administrador/SucursalList';

function App() {
  return (<div className="App">
  <BrowserRouter>
   <div>
   <div id="outer-container">
       <main id="page-wrap">      
         <Route exact path="/" component={Home} />
         <Route path="/administrador" component={Administrador} />
         <Route path="/agentedecuenta" component={Agentedecuenta} />
         <Route path="/cliente" component={Cliente} />
       </main>
   </div>
   </div>
 </BrowserRouter>
 </div>

    
  );
}

export default App;
