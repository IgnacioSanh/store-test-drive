import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ClickState {
	clicks: number;
}

const initialState: ClickState = {
	clicks: 0,
};

export const clickSlice = createSlice({
	name: "click",
	initialState,
	reducers: {
		increment: (state) => {
			state.clicks += 1;
		},
		decrement: (state) => {
			state.clicks -= 1;
		},
		increaseByAmount: (state, action: PayloadAction<number>) => {
			state.clicks += action.payload;
		},
	},
});

export const { increment, decrement, increaseByAmount } = clickSlice.actions;

export const selectClicks = (state: RootState) => state.clicks.clicks;

export default clickSlice.reducer;
