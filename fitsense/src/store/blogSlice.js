import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:3000/blogs");
    
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error("API'den dönen veri dizi değil");
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [], 
    filteredBlogs: [], 
    status: "idle", 
    error: null 
  },
  reducers: {
    
    searchBlogs: (state, action) => {
      const searchKey = action.payload.toLowerCase();
      if (searchKey === "") {
        state.filteredBlogs = state.blogs;
      } else {
        state.filteredBlogs = state.blogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchKey)
        );
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
        state.filteredBlogs = action.payload; 
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const getBlogByLink = (state, link) => {
  return state.blogs.filteredBlogs.find((item) => item.link === link);
};


export const { searchBlogs } = blogSlice.actions;
export default blogSlice.reducer;
