import { createSlice } from "@reduxjs/toolkit";

// Define the shape of the state for user authentication
export interface UserState {
  user: {
    id: string;
    full_name: string;
    email: string;
    phone_number: string;
    profile_image: string;
    role: string;
    password: string;
    hash_password: string;
  } | null;
  token: string | null;
}

// Initial state for authentication
const initialState: UserState = {
  user: null,
  token: null,
};

// Create the auth slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setLogoutUser: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

// Export actions
export const { setUserDetails, setLogoutUser } = userSlice.actions;
export const selectToken = (state: any) => state.user.token;

// Export reducer
export default userSlice.reducer;
