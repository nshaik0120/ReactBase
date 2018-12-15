import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import ComponentPage from './Components/ComponentPage';
import Login from './Components/Login';
ReactDOM.render(

    <Router>
        <div>
    <Route path="/" component={App}>
    </Route>
            <Route path="/components/" component={ComponentPage}>
            </Route>
            <Route path="/components/login" component={Login}>
            </Route>

        </div>
    </Router>




    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
