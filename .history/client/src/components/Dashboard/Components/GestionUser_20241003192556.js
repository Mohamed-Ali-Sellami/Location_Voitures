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
        {allusers?.map((data) => (
            <tr>
                <td data-label="Utilisateur">{data?.name} {data?.lastname}</td>
                <td data-label="email">{data}</td>
                <td data-label="Téléphone Mobile">77788888888</td>
            </tr>
        ))}
        </tbody>
    </table>
</div>
  
  
   </div>


    </div>
  )
}

export default GestionUser
