import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import createStore from './store';
import themeReducer from './reducer';
import { Provider } from './react-redux';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(themeReducer);

ReactDOM.render(<Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
