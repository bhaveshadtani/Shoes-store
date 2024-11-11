import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "../pages/user/auth/userSlice";
import storage from "redux-persist/lib/storage";  


// Define the persist configuration
const persistConfig = {
  key: "root",
  storage
};

const appReducer = combineReducers({
  user: userReducer,
});

// Wrap your reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, appReducer);

// Configure the Redux store with the userReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check (optional, only necessary if you're working with non-serializable values)
    }),
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
