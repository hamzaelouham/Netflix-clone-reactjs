import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;

/*
extraReducers: {
  [loginAsync.pending]: (state, action) => {
    state.status = "loading";
  },
  [loginAsync.fulfilled]: (state, action) => {
    state.status = "success";
    state.user = action.payload;
  },
  [loginAsync.rejected]: (state, action) => {
    state.status = "failed";
    state.error = action.payload;
    console.log(state.error);
  },
},
*/
/* export const loginAsync = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/login",
          data
        );
        if (response.status === 200) {
          console.log(response);
          return response;
        }
        /* else {
          console.log(response.data);
          return thunkAPI.rejectWithValue(response);
        }
      } catch (e) {
        //  console.log(e.response.data);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  */
