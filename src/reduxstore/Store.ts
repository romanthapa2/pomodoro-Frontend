import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./TimeSlice.ts";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // Key is required, it is used to store data in storage
  storage, // Use the storage engine you imported
};

const persistreducer = persistReducer(persistConfig, timeSlice);

export const store = configureStore({
  reducer: {
    time: persistreducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
