import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import sucursalReducer from "./reducers/sucursalReducer";
import usuarioReducer from "./reducers/usuarioReducer";
import { Provider } from "react-redux";
import { render } from 'react-dom';

import { store } from './_helpers';

import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
//if (localStorage.getItem('transactions') == null)
 //   localStorage.setItem('transactions', JSON.stringify([]))
//let initialState = {
  //  currentIndex: -1,
   // list: JSON.parse(localStorage.getItem('transactions'))
//}
//const store = createStore(sucursalReducer, initialState)

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//serviceWorker.unregister();
