import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'

const GestionUser = () => {

    const allusers=useSelector((store)=>store.user?.user)
  return (
    <div className=" box-gestionuser">
        <Sidebar/>
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
        {allcars?.map((data) => (
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
