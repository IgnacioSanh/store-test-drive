import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UserState {
	name: string;
}

const initialState: UserState = {
	name: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		changeName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		resetName: (state) => {
			state.name = "";
		},
	},
});

export const { changeName, resetName } = userSlice.actions;

export const selectUser = (store: RootState) => store.user.name;

export default userSlice.reducer;
