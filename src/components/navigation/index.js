import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { push as Menu } from 'react-burger-menu';
import Home from '../home/index';
import Administrador from '../administrador/index';
import './styles.css';


class Navigation extends React.Component{
    render() {

    return (
      <nav>
            <ul id="administrador">
                  <li><a href='/' className="active">Login<div>></div></a></li>
                  <li><a href='/administrador'>Sucursales<div><img src="/img/image2.jpg"/></div></a></li>
                  <li><a href=''>Agente de Cuenta <div><img src="/img/image3.jpg"/></div></a></li>
                  <li><a>href=''>Cliente<div><img src="/img/image4.jpg"/></div></a></li>
                  <li><a>Dolor<div><img src="/img/image5.jpg"/></div></a></li>
                  <li><a>Sit amet<div><img src="/img/image6.jpg"/></div></a></li>
            </ul>
            <ul id="cliente">
                  <li><a href='/' className="active">Login<div>></div></a></li>
                  <li><a href='/administrador'>Administrador<div><img src="/img/image2.jpg"/></div></a></li>
                  <li><a href=''>Agente de Cuenta <div><img src="/img/image3.jpg"/></div></a></li>
                  <li><a>href=''>Cliente<div><img src="/img/image4.jpg"/></div></a></li>
                  <li><a>Dolor<div><img src="/img/image5.jpg"/></div></a></li>
                  <li><a>Sit amet<div><img src="/img/image6.jpg"/></div></a></li>
            </ul>
            <ul id="agente de cuenta">
                  <li><a href='/' className="active">Login<div>></div></a></li>
                  <li><a href='/administrador'>Administrador<div><img src="/img/image2.jpg"/></div></a></li>
                  <li><a href=''>Agente de Cuenta <div><img src="/img/image3.jpg"/></div></a></li>
                  <li><a>href=''>Cliente<div><img src="/img/image4.jpg"/></div></a></li>
                  <li><a>Dolor<div><img src="/img/image5.jpg"/></div></a></li>
                  <li><a>Sit amet<div><img src="/img/image6.jpg"/></div></a></li>
            </ul>
 
      </nav>
    );
}
}
export default Navigation;