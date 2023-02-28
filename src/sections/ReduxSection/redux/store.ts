import { configureStore } from "@reduxjs/toolkit";

import clicksReducer from "./features/counter/counterSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		clicks: clicksReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
