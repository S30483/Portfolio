// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import App from './App';
// // import "./global.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import reportWebVitals from './reportWebVitals';
// import "./profile";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App/>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vita
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
