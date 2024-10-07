import React from 'react';
import image from './images/Profil.png'

function Header() {
  return (
    <div className="header">
        <div>
      <h1>Welcome back, Dali</h1>
      <p>Everything You Need, All in One Place.Stay Informed. Stay Ahead. </p>
      </div>

<div className='profil'>
 <img src={image} alt="profil"/>
 <h3>Admin</h3>
 </div>

    </div>


  );
}

export default Header;