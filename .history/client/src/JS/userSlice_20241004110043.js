import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5600/user/register",
      user
    );
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5600/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5600/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});
// getuser
export const getuser=createAsyncThunk('/getuser',async()=> {

  try {
  
   let resultat= axios.get('http://localhost:5600/user/all')  
   return await resultat;
      
  } catch (error) {
      console.log(error)    
  }
  })
//deleteuser
  export const deleteuser=createAsyncThunk('/deleteuser',async(id)=> {

    try {
    
     let resultat= axios.delete(`http://localhost:5600/user/${id}`)  
     return await resultat;
        
    } catch (error) {
        console.log(error)    
    }
    })
//updateuser
    export const updateuser=createAsyncThunk('/updateuser',async({id,upuser})=> {

      try {
      
       let resultat= axios.put(`http://localhost:5600/user/${id}`,upuser)  
       return await resultat;
          
      } catch (error) {
          console.log(error)    
      }
      })


const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload.data.newUserToken;
      localStorage.setItem("token", action.payload.data.token);
     
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [userLogin.pending]: (state) => {
      state.status = "pending";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("isAdmin", action.payload.data.user.isAdmin); //nzidou dashboard
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload?.data.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
  },
  
    extraReducers: (builder) => {
      builder 
      
      //get
      .addCase (getuser.pending , (state) => {
      state.status ="pending";
      })
      
      .addCase (getuser.fulfilled, (state,action) => {
      state.status ="success"
      state.user =action.payload?.data?.user ;
      })
      
      .addCase(getuser.rejected , (state) => {
      
          state.status="fail";
      }) 
      
      // //add
      // .addCase (adduser.pending , (state) => {
      //   state.status ="pending";
      //   })
        
      //   .addCase (adduser.fulfilled, (state) => {
      //   state.status ="success"
        
      //   })
        
      //   .addCase(adduser.rejected , (state) => {
        
      //       state.status="fail";
      //   })
      
        //delete 
      
        .addCase (deleteuser.pending , (state) => {
          state.status ="pending";
          })
          
          .addCase (deleteuser.fulfilled, (state) => {
          state.status ="success"
          
          })
          
          .addCase(deleteuser.rejected , (state) => {
          
              state.status="fail";
          })
      
          //Update 
          .addCase (updateuser.pending , (state) => {
            state.status ="pending";
            })
            
            .addCase (updateuser.fulfilled, (state) => {
            state.status ="success"
            
            })
            
            .addCase(updateuser.rejected , (state) => {
            
                state.status="fail";
            })
        
      
      
      
      
        }
  }
);



// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
