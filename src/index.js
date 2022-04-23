import React,{ BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import  App  from 'components/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);