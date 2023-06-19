import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppThemeProvider from './themes/AppThemeProvider';

import { Provider } from 'react-redux';
import store from "./Redux/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // wrap con il themeProvider per poter renderizzare lo stile
  <Provider store={store}> 
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
  </Provider>
  
);

