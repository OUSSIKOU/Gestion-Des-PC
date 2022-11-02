import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <a className="navbar-brand" href="#">
                {props.title}
            </a>
    
             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
               <Link className="nav-link" to="/Rens">
                  Renseignement  
               
               </Link>
                 </li>
                 <li className="nav-item active">
               <Link className="nav-link" to="/Rens/add">
                Ajouter Renseignement  
               
               </Link>
                 </li>
                 <li className="nav-item active">
               <Link className="nav-link" to="/About">
                  Pour Infos  
              
               </Link>
                 </li>
                  </ul>
                 
                  
               
           
        </nav>
    </div>
  )
}
Navbar.defaultProps = {
    title : "GESTION DES PC"
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired 
  };
export default Navbar ;