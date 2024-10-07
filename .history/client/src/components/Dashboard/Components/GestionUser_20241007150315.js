import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

const GestionUser = () => {
    

    const allusers = useSelector((store) => store.client?.client);
console.log("get")
  

    return (
        <div className="box-gestionuser">
            <Sidebar />
            <h1>Gestion des Clients</h1>
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
                        {allusers.map((data) => (
                            <tr >
                                <td data-label="Utilisateur">{data?.name}</td>
                                <td data-label="email">{data?.email}</td>
                                <td data-label="Téléphone Mobile">{data?.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GestionUser;


















// import React from 'react'
// import Sidebar from './Sidebar'
// import { useSelector } from 'react-redux'

// const GestionUser = () => {

//     // const allusers = useSelector((store) => store.user?.user)


//     // export default class PersonList extends React.Component {
//         state = {
//           persons: []
//         }
      
//         componentDidMount() {
//           axios.get(`https://jsonplaceholder.typicode.com/users`)
//             .then(res => {
//               const persons = res.data.user;
//               this.setState({ persons });
//             })
//         }
      
//         render() {
//   return (
//     <div className=" box-gestionuser">
//         <Sidebar/>
//       <h1>  Gestion des Clients</h1>
// <div>
// <div className='bodygestionuser'>
//     <table>
//         <thead className='tetetable'>
//             <tr>
//                 <th>Users</th>
//                 <th>Mail</th>
//                 <th>Téléphone Mobile</th>
//             </tr>
//         </thead>
//         <tbody>
//         {allusers?.map((data) => (
//             <tr>
//                 <td data-label="Utilisateur">{ data?.name}</td>
//                 <td data-label="email">{data?.email}</td>
//                 <td data-label="Téléphone Mobile">{data?.mobile}</td>
//             </tr>
//         ))}
//         </tbody>
//     </table>
// </div>
  
  
//    </div>


//     </div>
//   )
// }

// export default GestionUser






