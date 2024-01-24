import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { IPersistState } from "../../types/user";
import { ILocalStorageUser } from "../../types/localStorage";

const initialState: IPersistState = {
  user: { IsLoggedIn: null, name: null },
};

const slice = createSlice({
  name: "persist",
  initialState,
  reducers: {
    // SET APPOINTMENT DETAILS STATES
    setUser(state, action) {
      const value = action.payload;
      state.user.IsLoggedIn = value.isActive;
      state.user.name = value.user;
    },
  },
});

// Reducer
export default slice.reducer;

export const { actions } = slice;

export function setUserState(value: ILocalStorageUser) {
  return async () => {
    dispatch(slice.actions.setUser(value));
    // localStorage.setItem("isUserActive", value.isActive as unknown as string);
    // localStorage.setItem("name", value.user ?? "");
  };
}
