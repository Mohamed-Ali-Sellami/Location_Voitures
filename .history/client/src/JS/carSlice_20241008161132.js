import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


/////////////////////////GET/////////////////////////////////////
export const getcar=createAsyncThunk('/getcar',async()=> {

try {

 let resultat= axios.get('http://localhost:5600/car/all')  
 return await resultat;
    
} catch (error) {
    console.log(error)    
}
})
/////////////////////////ADD//////////////////////////////////////////
export const addcar=createAsyncThunk('/addcar',async(newcar)=> {

  try {
  
   let resultat= axios.post('http://localhost:5600/car/add',newcar)  
   return await resultat;
      
  } catch (error) {
      console.log(error)    
  }
  })
//////////////////////delete////////////////////////////////////////

export const deletecar=createAsyncThunk('/deletecar',async(id)=> {

  try {
  
   let resultat= axios.delete(`http://localhost:5600/car/${id}`)  
   return await resultat;
      
  } catch (error) {
      console.log(error)    
  }
  })
///////////////////////////update////////////////////////////////
export const updatecar=createAsyncThunk('/updatecar',async({id,upcar})=> {

  try {
  
   let resultat= axios.put(`http://localhost:5600/car/${id}`,upcar)  
   return await resultat;
      
  } catch (error) {
      console.log(error)    
  }
  })

  export const addreservation=createAsyncThunk('/addreservation',async({id,reservation})=> {

    try {
    
     let resultat= axios.put(`http://localhost:5600/car/${id}`,upcar)  
     return await resultat;
        
    } catch (error) {
        console.log(error)    
    }
    })
const initialState = {
    car:null,
    status:null ,

}

export const carSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
builder 

//get
.addCase (getcar.pending , (state) => {
state.status ="pending";
})

.addCase (getcar.fulfilled, (state,action) => {
state.status ="success"
state.car=action.payload?.data?.car ;          
})

.addCase(getcar.rejected , (state) => {

    state.status="fail";
}) 

//add
.addCase (addcar.pending , (state) => {
  state.status ="pending";
  })
  
  .addCase (addcar.fulfilled, (state) => {
  state.status ="success"
  
  })
  
  .addCase(addcar.rejected , (state) => {
  
      state.status="fail";
  })

  //delete 

  .addCase (deletecar.pending , (state) => {
    state.status ="pending";
    })
    
    .addCase (deletecar.fulfilled, (state) => {
    state.status ="success"
    
    })
    
    .addCase(deletecar.rejected , (state) => {
    
        state.status="fail";
    })

    //Update 
    .addCase (updatecar.pending , (state) => {
      state.status ="pending";
      })
      
      .addCase (updatecar.fulfilled, (state) => {
      state.status ="success"
      
      })
      
      .addCase(updatecar.rejected , (state) => {
      
          state.status="fail";
      })
  




  }
})

// Action creators are generated for each case reducer function
export const {} = carSlice.actions

export default carSlice.reducer