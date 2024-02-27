import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme/Theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
 import { Provider } from 'react-redux';
import store from './redux/store';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
  <React.StrictMode>
    <Provider store={store}>
        <App />
        </Provider>
      </React.StrictMode>
    </ThemeProvider>
);

reportWebVitals();
