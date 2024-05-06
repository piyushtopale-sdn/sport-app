import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import configureStore from './config';
import App from './App';
import './index.css';
import '../src/assets/styles/style.css';
import 'react-toastify/dist/ReactToastify.css';

let { store, persistor } = configureStore()

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
