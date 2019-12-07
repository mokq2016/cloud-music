import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
/* import App from './App' */
import RouterMap from "./router/router";
import {Provider} from 'react-redux'
import storeConfig from "./store/store";
const store = storeConfig()
ReactDOM.render(
  <Provider store={store}>
    <RouterMap/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
