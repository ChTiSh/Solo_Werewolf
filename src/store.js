import { configureStore } from '@reduxjs/toolkit';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import reducers from './reducers/combineReducer.js';
import gameReducer from './reducers/gameReducer.js';

//updated with configureStore as createStore was deprecated
const store = configureStore({
    reducer:{
      game:gameReducer
    }
  }
);

export default store;