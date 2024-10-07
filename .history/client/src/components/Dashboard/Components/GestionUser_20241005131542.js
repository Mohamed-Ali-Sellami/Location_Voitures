





// import React from 'react'
// import Sidebar from './Sidebar'
// import { useSelector } from 'react-redux'

// const GestionUser = () => {

//     const allusers = useSelector((store) => store.users?.user)


    
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






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
// import { useSelector } from 'react-redux';

const GestionUser = () => {
    const [persons, setPersons] = useState([]);
    // const allusers = useSelector((store) => store.user?.user);

    useEffect(() => {
        axios.get('http://localhost:3000/getusers')
            .then(res => {
                setPersons(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
                        {persons.map((data) => (
                            <tr key={data.id}>
                                <td data-label="Utilisateur">{data.name}</td>
                                <td data-label="email">{data.email}</td>
                                <td data-label="Téléphone Mobile">{data.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GestionUser;






