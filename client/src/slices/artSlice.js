import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artItems: [],
};

const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    setArtItems: (state, action) => {
      state.artItems = action.payload;
    },
    
  },
});

export const { setArtItems } = artSlice.actions;

export default artSlice.reducer;
