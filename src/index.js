import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import FrontendLayout from './Components/FrotendLayout';
import { BrowserRouter as Router, Route,Routes, Switch,Link } from 'react-router-dom';
import BackendLayout from './Components/BackendLayout';
import Admin from './Components/backend/Admin';
import Home from './Components/Frontend/Home/Home';
import About from './Components/Frontend/About';
import Contact from './Components/Frontend/Contact';
import Dashboard from './Components/backend/Dashboard';
import AppRoutes from './Components/router/AppRoutes';
import Login from './Components/auth/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Routes>
       <Route path="/" element={<FrontendLayout><Home /></FrontendLayout>} />
        <Route path="/about" element={<FrontendLayout><About /></FrontendLayout>} />
        <Route path="/contact" element={<FrontendLayout><Contact /></FrontendLayout>} />
        <Route path="/*" element={<BackendLayout><AppRoutes /></BackendLayout>} />
        {/* <Route path="/dashboard" element={<BackendLayout><Dashboard /></BackendLayout>} />
        <Route path="/analytics" element={<BackendLayout><Analytics /></BackendLayout>} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
   </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
