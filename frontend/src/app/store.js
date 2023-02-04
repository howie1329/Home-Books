import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/books/bookSlice";
import userReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    users: userReducer,
  },
});
