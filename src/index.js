import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter basename="/goit_react_hw_05_movies/">
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
