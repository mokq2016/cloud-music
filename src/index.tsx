import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
/* import App from './App' */
import RouterMap from "./router/router";
ReactDOM.render(
  <RouterMap/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
