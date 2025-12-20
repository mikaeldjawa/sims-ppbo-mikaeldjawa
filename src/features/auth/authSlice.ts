import { LS_TOKEN } from "@/utils/constants";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem(LS_TOKEN),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem(LS_TOKEN, action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem(LS_TOKEN);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
