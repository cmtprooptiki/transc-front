import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import apiBaseUrl from "../api_config.jsx";
const initialState={
    
    user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const LoginUser=createAsyncThunk("user/loginUser",async(user,thunkAPI)=>{
    try{
        const response=await axios.post(`${apiBaseUrl}/login`,{
            email:user.email,
            password:user.password
        });
        return response.data;
    } catch(error){
        if(error.response){
            const message=error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getMe=createAsyncThunk("user/getMe",async(_,thunkAPI)=>{
    try{
        const response=await axios.get(`${apiBaseUrl}/me`,{timeout: 5000});
        return response.data;
    } catch(error){
        if(error.response){
            const message=error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const LogOut=createAsyncThunk("user/LogOut",async()=>{
    
        await axios.delete(`${apiBaseUrl}/logout`);
       
    
})

export const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state)=>{initialState}
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginUser.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(LoginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(LoginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message =action.payload;
        })

        //GET USER LOGIN
        builder.addCase(getMe.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(getMe.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess = true;
            state.isError=false;
            state.user = action.payload;
        })
        builder.addCase(getMe.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message =action.payload;
        })

        
        builder.addCase(LogOut.fulfilled, (state) => {
            state.user = null; // Clear user immediately
            state.isSuccess = false;
            state.isLoading = false;
            state.isError = false;
        });
    }
})

export const {reset}=authSlice.actions;
export default authSlice.reducer;