import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import CheckoutPage from './components/CheckoutPage';
import ResultPage from './components/ResultPage';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/result" component={ResultPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route exact path="/" component={App} />
            </Switch>
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
