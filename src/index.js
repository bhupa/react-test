import React,{ Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import FrontendLayout from './Components/FrotendLayout';
import { BrowserRouter as Router, Route,Routes, Switch,Link } from 'react-router-dom';
import BackendLayout from './Components/BackendLayout';
import AppRoutes from './Components/router/AppRoutes';
import Login from './Components/auth/Login';
import FrontendRoute from './Components/router/FrontendRoute';
import Home from './Components/Frontend/Home/Home';
import About from './Components/Frontend/About';
import Categories from './Components/backend/categories/Categories';
import Dashboard from './Components/backend/Dashboard';
import Analytics from './Components/backend/Analytics/Analytics';
import { configureStore } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import userReducer from './Components/features/user'
import { store, persistor } from './Components/store';
import { Provider } from 'react-redux';
import PermissionRoute from './Components/router/PermissionRoute'
import BackendRoutes from './Components/router/BackendRoutes';
import PublicRoute  from './Components/router/PublicRoute'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    
     <PersistGate persistor={persistor}>
              <Router>
                  <Routes>
                      {/* Frontend end routes */}
                    <Route path="/" element={<FrontendLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/categories" element={<Categories />} /> 
                      </Route>
                      {/* <Route path="/login" element={<PublicRoute element={<Login />} />} /> */}
                      {/* <PublicRoute path="/login" element={<Login />} /> */}
                    {/* <Route path="/admin" element={<BackendLayout />}> */}
                    <Route path="/admin/*" element={<BackendRoutes element={<BackendLayout />} />} >
                        <Route index path="dashboard" element={<Dashboard />} />
                        <Route path="categories"  element={<PermissionRoute  permission="create-user"><Categories /></PermissionRoute>} />
                        <Route path="users"  element={<PermissionRoute  permission="create-users"><Categories /></PermissionRoute>} />
                        <Route path="analytics" element={<Analytics />} />
                   </Route>
                    {/* </Route> */}
                    {/* <Route path="/*" element={<BackendLayout><AppRoutes /></BackendLayout>} /> */}
                    <Route path="/login" element={<PublicRoute element={<Login />} />} />
                  </Routes>
              </Router>
      </PersistGate>

  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
