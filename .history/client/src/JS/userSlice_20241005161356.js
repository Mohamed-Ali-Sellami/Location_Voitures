import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// userRegister
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:5600/user/register",
      user
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// userLogin
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    const response = await axios.post("http://localhost:5600/user/login", user);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// userCurrent
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    const response = await axios.get("http://localhost:5600/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// getUser
export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await axios.get("http://localhost:5600/user/all");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// deleteUser
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5600/user/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// updateUser
export const updateUser = createAsyncThunk("user/updateUser", async ({ id, upUser }) => {
  try {
    const response = await axios.put(`http://localhost:5600/user/${id}`, upUser);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  user: null,
  status: null,
};

// userSlice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // userRegister cases
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.newUserToken;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "fail";
      });

    // userLogin cases
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("isAdmin", action.payload.user.isAdmin);
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = "fail";
      });

    // userCurrent cases
    builder
      .addCase(userCurrent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.user;
      })
      .addCase(userCurrent.rejected, (state) => {
        state.status = "fail";
      });

    // getUser cases
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.users;
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "fail";
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;














// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { get } from "mongoose";
// export const userRegister = createAsyncThunk("user/register", async (user) => {
//   try {
//     let response = await axios.post(
//       "http://localhost:5600/user/register",
//       user
//     );
//     return await response;
//   } catch (error) {
//     console.log(error);
//   }
// });
// export const userLogin = createAsyncThunk("user/login", async (user) => {
//   try {
//     let response = await axios.post("http://localhost:5600/user/login", user);
//     return await response;
//   } catch (error) {
//     console.log(error);
//   }
// });
// export const userCurrent = createAsyncThunk("user/current", async () => {
//   try {
//     let response = await axios.get("http://localhost:5600/user/current", {
//       headers: {
//         Authorization: localStorage.getItem("token"),
//       },
//     });
//     return await response;
//   } catch (error) {
//     console.log(error);
//   }
// });
// // getuser
// export const getuser=createAsyncThunk('/getuser',async()=> {

//   try {
  
//    let resultat= axios.get('http://localhost:5600/user/all')  
//    return await resultat;
      
//   } catch (error) {
//       console.log(error)    
//   }
//   })
// //deleteuser
//   export const deleteuser=createAsyncThunk('/deleteuser',async(id)=> {

//     try {
    
//      let resultat= axios.delete(`http://localhost:5600/user/${id}`)  
//      return await resultat;
        
//     } catch (error) {
//         console.log(error)    
//     }
//     })
// //updateuser
//     export const updateuser=createAsyncThunk('/updateuser',async({id,upuser})=> {

//       try {
      
//        let resultat= axios.put(`http://localhost:5600/user/${id}`,upuser)  
//        return await resultat;
          
//       } catch (error) {
//           console.log(error)    
//       }
//       })


// const initialState = {
//   user: null,
//   status: null,
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logout: (state, action) => {
//       state.user = null;
//       localStorage.removeItem("token");
//     },
//   },
//   extraReducers:
  
//   (builder) => {
//     builder 
    
//     //get
//     .addCase (getuser.pending , (state) => {
//     state.status ="pending";
//     })
    
//     .addCase (getuser.fulfilled, (state,action) => {
//     state.status ="success"
//     state.client =action.payload?.data?.client ;
//     })
    
//     .addCase(getuser.rejected , (state) => {
    
//         state.status="fail";
//     }) ,
  
  
  
//   {
//     [userRegister.pending]: (state) => {
//       state.status = "pending";
//     },
//     [userRegister.fulfilled]: (state, action) => {
//       state.status = "succcessssss";
//       state.user = action.payload.data.newUserToken;
//       localStorage.setItem("token", action.payload.data.token);
     
//     },
//     [userRegister.rejected]: (state) => {
//       state.status = "fail";
//     },
//     [userLogin.pending]: (state) => {
//       state.status = "pending";
//     },
//     [userLogin.fulfilled]: (state, action) => {
//       state.status = "succcessssss";
//       state.user = action.payload.data.user;
//       localStorage.setItem("token", action.payload.data.token);
//       localStorage.setItem("isAdmin", action.payload.data.user.isAdmin); //nzidou dashboard
//     },
//     [userLogin.rejected]: (state) => {
//       state.status = "fail";
//     },
//     [userCurrent.pending]: (state) => {
//       state.status = "pending";
//     },
//     [userCurrent.fulfilled]: (state, action) => {
//       state.status = "succcessssss";
//       state.user = action.payload?.data.user;
//     },
//     [userCurrent.rejected]: (state) => {
//       state.status = "fail";
//     },
//     [user.fulfilled]: (state, action) => {
//       state.status = "succcessssss";
//       state.user = action.payload?.data.users; 
//     },
    
   
//   }
      
// }
// );



// Action creators are generated for each case reducer function
// export const { logout } = userSlice.actions;

// export default userSlice.reducer;
