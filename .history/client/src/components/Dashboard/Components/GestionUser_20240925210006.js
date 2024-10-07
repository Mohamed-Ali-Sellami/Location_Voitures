import React from 'react'

const GestionUser = () => {
  return (
    <div className=" box-gestionuser">
      <h1>  Gestion des Clients</h1>
<div>
<div className='bodygestionuser'>
    <table>
        <thead className='tetetable'>
            <tr>
                <th>Users</th>
                <th>Voiture Réservée</th>
                <th>Téléphone Mobile</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Utilisateur">Dali Sellami</td>
                <td data-label="Voiture Réservée">Renault Clio 3</td>
                <td data-label="Téléphone Mobile">77788888888</td>
            </tr>
            <tr>
                <td data-label="Utilisateur">Mohamed Salah</td>
                <td data-label="Voiture Réservée">Peugeot 308</td>
                <td data-label="Téléphone Mobile">55558888888</td>
            </tr>
            <tr>
                <td data-label="Utilisateur">ahmed hassan</td>
                <td data-label="Voiture Réservée">Seat Ibiza</td>
                <td data-label="Téléphone Mobile">445555555</td>
            </tr>
        </tbody>
    </table>
</div>
  
  
   </div>


    </div>
  )
}

export default GestionUser
