import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts: any = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response: any = await fetch(
      "http://localhost:3000/api/products/getAllProducts"
    );
    return response.json();
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: true,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      // Add user to the state array
      //   state.products = action.payload;
      console.log(action.payload);
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
