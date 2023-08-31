import React,{ useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch,Link, useNavigate } from 'react-router-dom';
import LogoUrl from '../../../img/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { logoutApi  } from '../../api/login';
import { useDispatch, } from 'react-redux';
import { logout } from '../../reducers/authReducer';

function Navabr(){
  const {  token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  });
  const  handleLogout = async(event) => {
    event.preventDefault();
    logoutApi(token)
    .then((response) => {
      dispatch(logout());
        console.log('Logour successful');
        navigate('/');
    })
    .catch((error) => {
        
    });
  }
    return(
        <div className="container">
        <nav className="navbar navbar-expand-lg">
        <Link to=""  className="navbar-brand">
          <img src={LogoUrl} alt="Logo" width="50" />
          </Link>
      
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex justify-content-center">
            <li className="nav-item">
              <Link to="/"  className="nav-link">Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about"  className="nav-link">About
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/about"  className="nav-link">Servies
              </Link>
            </li>
          </ul>
      
          <ul className="navbar-nav mr-auto">
          { !token ? ( 
          <li className="nav-item dropdown">
          <Link to="#" className="nav-link dropdown-toggle" id="loginDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            </Link>
            <div className="dropdown-menu" aria-labelledby="loginDropdown">
              <Link to="/login" className="dropdown-item">Login</Link>
              <Link to="/register" className="dropdown-item">Register</Link>
            </div>
          </li>
           ) :
           (<li className="nav-item">
          <button onClick={handleLogout} className="nav-link btn-link">
          Logout
        </button>
          </li>)
           } 
        </ul>
        </div>
      </nav>
      </div>
            
       
    )
}
export default Navabr;