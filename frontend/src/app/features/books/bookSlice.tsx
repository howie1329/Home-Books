import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BOOKS_URL = '"proxy": "http://localhost:4002/api/books"';

const initialState = { allBooks: [], currentBook: {} };

const getBooks = async () => {
  const response = await fetch("/api/books");
  const data = await response.json();
  if (response.ok) {
    console.log(data);
    return data;
  }
};

/*export const fetchBooks = async (state) => {
  try {
    const response = await axios.get("/api/books");
    console.log(response);
    state.allBooks = [response];
  } catch (err) {
    return err.message;
  }
}; */ 

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooks: (state) => {
      //state.allBooks.push(fetchBooks(state)) 
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
