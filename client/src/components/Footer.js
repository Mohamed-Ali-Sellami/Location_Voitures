import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'

const Footer = () => {
  return (
    <div>
      
      <div className='body'>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-column">
                <h3 class="contactt">SellamiCars@Tunis.com</h3>
            </div>
            <div class="footer-column">
                <h3>Aide</h3>
                <ul>
                    <li><a href="#">Paramètres de confidentialité</a></li>
                    <Link to="/login">   <li><a href="#">Se connecter</a></li> </Link>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Politique</h3>
                <ul>
                    <li><a href="#">Politique en matière de cookies</a></li>
                    <li><a href="#">Politique de confidentialité</a></li>
                    <li><a href="#">Conditions d'utilisation</a></li>
                    <li><a href="#">Coordonnées de la société</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Explorer</h3>
                <ul>
                    <li><a href="#">Entreprise</a></li>
                    <li><a href="#">Partenaires</a></li>
                    <li><a href="#">Voyages</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            © Sellami Cars Ltd 2016 – 2024
        </div>
    </footer>
</div>


    </div>
  )
}

export default Footer
