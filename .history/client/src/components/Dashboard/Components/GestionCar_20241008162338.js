import React, { useState } from 'react'
import AddCar from './AddCar';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { deletecar, updatecar } from '../../../JS/carSlice';

const GestionCar = () => {

  const [showfirst, setshowfirst] = useState(false);
  const [showsecond, setshowsecond] = useState(false);
  const dispatch = useDispatch();

  const allcars=useSelector((store)=>store.car?.car)
  


  const [upcar, setupcar] = useState({
    startDate::"" 
        })

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
                <th>Price per day</th>
                <th>Settings</th>
            </tr>
        </thead>
        <tbody>
        {allcars?.map((data) => (
            <tr>
                <td data-label="car">{data?.model}</td>
                <td data-label="matricule">{data?.matriculation}</td>
                <td data-label="Price_per_day">{data?.
price_per_day } TND</td>

                <td data-label="settings">

                    <div className='settingsadmin'>
                    <button className='deletebtn' onClick={() => (dispatch(deletecar(data?._id)))}> Delete</button>


                    <button className='updatebtn' onClick={()=> setshowsecond(!showsecond)}> Update</button>
                    </div>
                    {showsecond? 
                    (<> 
                    <div className='updatecarsettings'>
                     <p>Models car</p><input type="text" placeholder={data.model} onChange={(e)=>setupcar({name:e.target.value})}/> 
                     <p>Matricules</p><input type="text" placeholder={data.matriculation} onChange={(e)=>setupcar({matriculation:e.target.value})}/> 
                     <p>Price per day</p><input type="text" placeholder={data.price_per_day} onChange={(e)=>setupcar({price_per_day:e.target.value})}/> 
                     <p>Availability</p><input type="text" placeholder={data.availability_status} onChange={(e)=>setupcar({availability_status:e.target.value})}/> 
                     </div> 
                     <button className="btn-up-ok" onClick={()=>dispatch(updatecar({id:data._id,upcar:upcar}))}>ok</button>
                     </>):null}
                     

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
