import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
axios.defaults.baseURL = 'https://my-json-server.typicode.com/Revanray1/demo';
axios.interceptors.request.use((request)=>{

  return request;
  },
  (error)=>{
  return Promise.reject(error);
  })
  
  axios.interceptors.response.use((response)=>{
    return  response.data
    },
    (error)=>{
    return Promise.reject(error);
    })

    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
