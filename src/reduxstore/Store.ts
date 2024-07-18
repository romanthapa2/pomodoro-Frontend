import { configureStore} from "@reduxjs/toolkit";
import TimeSlice from "./TimeSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root", // Key is required, it is used to store data in storage
    storage, // Use the storage engine you imported
  };


  const persistreducer = persistReducer(persistConfig, TimeSlice);

  export const store = configureStore({
    reducer: persistreducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
