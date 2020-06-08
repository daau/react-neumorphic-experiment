import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormPage from './FormPage';
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';

const theme = {
  primaryLight: "#8abdff",
  primary: "#6d5dfc",
  primaryDark: "#5b0eeb",
  
  white: "#FFFFFF",
  greyLight1: "#E4EBF5",
  greyLight2: "#c8d0e7",
  greyLight3: "#bec8e4",
  greyDark: "#9baacf",

  shadow: ".3rem .3rem .6rem #c8d0e7",
  bgColor: "#f2f2f2",
}

ReactDOM.render(
  <React.StrictMode>
    <Normalize />    
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
