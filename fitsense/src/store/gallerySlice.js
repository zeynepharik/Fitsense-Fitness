import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPortfolios = createAsyncThunk("gallery/fetchPortfolios", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:3000/portfolios"); 
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error("API'den dönen veri dizi değil");
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    portfolios: [], 
    status: "idle", 
    error: null 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.portfolios = action.payload;
      })
      .addCase(fetchPortfolios.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default gallerySlice.reducer;
