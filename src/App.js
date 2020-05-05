
import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

//import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Home from './components/home/index';
import { push as Menu } from 'react-burger-menu';
import Agentedecuenta from './components/agentedecuenta/index';
import Cliente from './components/cliente/index';
import Navigation from './components/navigation/index'
import SucursalesAdministrador from './components/administrador/SucursalList';
import SucursalesUsuarios from './components/administrador/UsuarioList';

function App() {

  const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export { App };



//  return (<div className="App">
//  <BrowserRouter>
//  <div>
//   <div id="outer-container">
//       <main id="page-wrap">      
//         <Route exact path="/" component={Home} />
//         <Route path="/administrador/usuarios" component={SucursalesUsuarios} />
//         <Route path="/administrador/sucursales" component={SucursalesAdministrador} />
//         <Route path="/agentedecuenta" component={Agentedecuenta} />
//         <Route path="/cliente" component={Cliente} />
//       </main>
//   </div>
//   </div>
// </BrowserRouter>
// </div>

    
export default App;
