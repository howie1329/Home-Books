import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BOOKS_URL = '"proxy": "http://localhost:4002/api/books"';

const initialState = { allBooks: [], currentBook: {} };


export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooks: (state,action) => {
      state.allBooks = action.payload;
    },
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
    default: (state) => {
      return state;
    },
  },
});

export const { getAllBooks, setCurrentBook } = bookSlice.actions;

export default bookSlice.reducer;
