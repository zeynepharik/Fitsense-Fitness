
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchFaqs = createAsyncThunk('faq/fetchFaqs', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:3000/faqs');
    return response.data; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const faqSlice = createSlice({
  name: 'faq',
  initialState: {
    faqs: [],       
    status: 'idle', 
    error: null,    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.status = 'loading'; 
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.status = 'succeeded'; 
        state.faqs = action.payload; 
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.status = 'failed'; 
        state.error = action.payload; 
      });
  },
});

export default faqSlice.reducer;
