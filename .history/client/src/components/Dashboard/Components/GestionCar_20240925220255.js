import React, { useState } from 'react'
import AddCar from './AddCar';

const GestionCar = () => {

  const [showfirst, setshowfirst] = useState(false);

  return (
    <div className=" box-gestionuser">
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
            <tr>
                <td data-label="car">Seat ibiza</td>
                <td data-label="matricule">444 tun 122</td>
                <td data-label="availabilty">77788888888</td>
                <td data-label="settings">
                    <button> Delete</button>
                    <button> Update</button>
                </td>
            </tr>
            <tr>
            <td data-label="car">Clio 3</td>
                <td data-label="matricule">444 tun 123</td>
                <td data-label="availabilty">77788888888</td>
                <td data-label="settings">
                    <button> Delete</button>
                    <button> Update</button>
                </td>
            </tr>
            <tr>
            <td data-label="car">Cupra Leon</td>
                <td data-label="matricule">444 tun 222</td>
                <td data-label="availabilty">77788888888</td>
                <td data-label="settings">
                    <button> Delete</button>
                    <button> Update</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  
  
   </div>


    </div>
  )
}

export default GestionCar
