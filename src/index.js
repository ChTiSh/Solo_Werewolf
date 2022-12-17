import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

/**
 * A web based free werewolf game
 */

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
