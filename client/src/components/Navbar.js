import React, { useState } from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import imagelogo from "./images/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/userSlice'

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  console.log("user", user);
  
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    closeMobileMenu(); // Fermer le menu après déconnexion
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src={imagelogo} alt="logo"/>
        </div>
        <div className="contact">
          <i className="fa-brands fa-whatsapp"></i> (+216) 56 751 909
        </div>
      </header>
      
      <nav>
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
        <ul className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
          <Link to="/" onClick={closeMobileMenu}>
            <li>Accueil</li>
          </Link>
          
          <Link to="/voitures" onClick={closeMobileMenu}>
            <li>Véhicules</li>
          </Link>
          
          <Link to="/tarifs" onClick={closeMobileMenu}>
            <li>Tarifs</li>
          </Link>
          
          <Link to="/agences" onClick={closeMobileMenu}>
            <li>Agences</li>
          </Link>
          
          <Link to="/contact" onClick={closeMobileMenu}>
            <li>Contact</li>
          </Link>
          
          {!isAuth ? (
            <Link to="/login" onClick={closeMobileMenu}>
              <li>Espace client</li>
            </Link>
          ) : (
            <>
              {user?.isAdmin ? (
                <Link to="/dashboard" onClick={closeMobileMenu}>
                  <li>Dashboard</li>
                </Link>
              ) : (
                <Link to="/profil" onClick={closeMobileMenu}>
                  <li>Profil</li>
                </Link>
              )}
              <li onClick={handleLogout}>Déconnexion</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar