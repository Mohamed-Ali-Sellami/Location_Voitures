import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'

const GestionUser = () => {

    const alluser = useSelector((state) => state.user.user)
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
                <th>Mail</th>
                <th>Téléphone Mobile</th>
            </tr>
        </thead>
        <tbody>
        {allusers?.map((user) => (
            <tr>
                <td data-label="Utilisateur">{user?.name}</td>
                <td data-label="email">{user?.email}</td>
                <td data-label="Téléphone Mobile">{user?.mobile}</td>
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
