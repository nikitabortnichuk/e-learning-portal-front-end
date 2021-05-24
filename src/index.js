import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import App from './main/app/App';
import { Provider } from 'react-redux';
import store from './main/model/store/store';
import { history } from './main/model/helpers/history';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
