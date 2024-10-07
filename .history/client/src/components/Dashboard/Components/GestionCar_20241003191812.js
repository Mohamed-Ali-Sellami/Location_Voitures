import React, { useState } from 'react'
import AddCar from './AddCar';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const GestionCar = () => {

  const [showfirst, setshowfirst] = useState(false);
  const allcars=useSelector((store)=>store.car?.car)
  return (
    <div className=" box-gestionuser">
        <Sidebar/>
      <h1>  Gestion des Cars</h1>
<div>


  <button   className='btnaddcar' onClick={() => setshowfirst(!showfirst)}> ADD Car</button>
  {showfirst ? (
            <div >
              <AddCar setshowfirst={setshowfirst} />{" "}
            </div>
          ) : null}


<div className='bodygestionuser'>
    <table>
        <thead className='tetetable'>
            <tr>
                <th> Model of Cars</th>
                <th>Matricules</th>
                <th>Availablity</th>
                <th>Settings</th>
            </tr>
        </thead>
        <tbody>
        {allcars?.map((data) => (
            <tr>
                <td data-label="car">{data.model}</td>
                <td data-label="matricule">444 tun 122</td>
                <td data-label="availabilty">77788888888</td>
                <td data-label="settings">
                    <button> Delete</button>
                    <button> Update</button>
                </td>
            </tr>
        ))}    
        </tbody>
    </table>
</div>
  
  
   </div>


    </div>
  )
}

export default GestionCar
