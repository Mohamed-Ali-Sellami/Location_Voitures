import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2> SELLAMI CARS</h2>
      <ul>
      <Link to="/dashboard"> <li>  <i class="fa-solid fa-house"></i>  Home </li> </Link>
             <Link to="/gestioncars"> <li> <i class="fa-solid fa-car"></i>Gestion des Cars</li> </Link>
             <Link to="/gestionusers"><li>  <i class="fa-regular fa-user"></i>Gestion des users </li></Link>
             <Link to="/reservationsAdmin"><li> <i class="fa-solid fa-calendar-days"></i> Resrvations</li> </Link>
        <li> <i class="fa-solid fa-chart-simple"></i>Statistiques</li>
        <Link to="/"></Link><li> <i class="fa-solid fa-person-walking-arrow-right"></i>exit</li>
      </ul>
    </div>
  );
}

export default Sidebar;