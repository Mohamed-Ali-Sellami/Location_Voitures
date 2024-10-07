import React from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import imagelogo from "./images/logo.png"
const Navbar = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  console.log("isAdmin",isAdmin)
  const isAuth = localStorage.getItem("token");
  return (
    <div>
       <header>
        <div className="logo">  
        <img src={imagelogo} alt="logo"/>  
         </div>

        <div className="contact"> <i class="fa-brands fa-whatsapp"></i>  (+216)  56 751 909</div>
    </header>
    
    <nav>
        <ul>
        <Link to="/"><li>Accueil</li> </Link>
            <Link to="/voitures">  <li>Véhicules</li></Link>
            <Link to="/tarifs"> <li>Tarifs</li> </Link>
         <Link to="/agences"> <li>Agences</li></Link>
         <Link to="/contact">  <li>Contact</li></Link>
            <Link to="/login"><li>Espace client</li></Link>
            {isAdmin? <Link to="/dashboard"><li>Dashboard</li></Link>: null}
            {isAuth &&!isAdmin? <Link to="/dashboard"><li>Dashboard</li></Link>: null}
        </ul>
    </nav>

    </div>
  )
}

export default Navbar
