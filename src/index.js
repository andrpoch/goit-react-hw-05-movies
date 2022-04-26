import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter basename="goit-react-hw-05-movies">
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
