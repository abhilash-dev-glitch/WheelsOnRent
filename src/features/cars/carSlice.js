import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const res = await fetch('/cars.json');
  return await res.json();
});

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    list: [],
    wishlist: [],
    selectedBrand: 'All',
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const id = action.payload;
      if (state.wishlist.includes(id)) {
        state.wishlist = state.wishlist.filter((carId) => carId !== id);
      } else {
        state.wishlist.push(id);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
    setBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    loadWishlist: (state) => {
      const stored = localStorage.getItem('wishlist');
      if (stored) state.wishlist = JSON.parse(stored);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { toggleWishlist, setBrand, loadWishlist } = carSlice.actions;
export default carSlice.reducer;
