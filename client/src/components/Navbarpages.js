import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import imagelogo from './images/logo.png'
import { logout } from '../JS/userSlice';
import './styles/Navbarpages.css'

const Navbarpages = () => {
    const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const isAuth = localStorage.getItem("token");
  return (
    <div>
      <nav className="navbar-pages">
        {/* Logo à droite */}
      <div className="logo">
        <Link to="/"><h2>SELLAMI CARS</h2></Link>
        {/* <img src={imagelogo} alt="logo" /> */}
      </div>
      {/* Liens à gauche */}
      <ul className="nav-links">
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/voitures"><li>Véhicules</li></Link>
        <Link to="/tarifs"><li>Tarifs</li></Link>
        <Link to="/agences"><li>Agences</li></Link>
        <Link to="/contact"><li>Contact</li></Link>

        {!isAuth ? (
          <Link to="/login"><li>Login</li></Link>
        ) : (
          <>
            {user?.isAdmin ? (
              <Link to="/dashboard"><li>Dashboard</li></Link>
            ) : (
              <Link to="/profil"><li>Profil</li></Link>
            )}
            <li onClick={() => dispatch(logout())}>Déconnexion</li>
          </>
        )}
      </ul>

      
    </nav>
  
    </div>
  )
}

export default Navbarpages
