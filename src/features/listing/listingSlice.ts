import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IListing } from "./types";
import { getTopFreeListing, getSuggestions } from "./listingAPI";
import { RootState } from "../../app/store";

export interface IListingState {
  topFreeListing: IListing[];
  suggestions: IListing[];
  search: string;
}

const initialState: IListingState = {
  topFreeListing: [],
  suggestions: [],
  search: "",
};

// Create a thunk to call API
export const fetchTopFreeListing = createAsyncThunk(
  "listing/fetchTopFreeListing",
  async () => {
    const response = await getTopFreeListing();
    console.log("response of fetchTopFreeListing", response);
    return response.data;
  }
);

// Create a thunk to call API
export const fetchSuggestions = createAsyncThunk(
  "listing/fetchSuggestions",
  async () => {
    const response = await getSuggestions();
    console.log("response of fetchSuggestions", response);
    return response.data;
  }
);

// Create slice, a part of the Redux global states
export const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    // increment: (state, action) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   //   state.value += 1;
    // },
    // decrement: (state) => {
    //   //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   //   state.value += action.payload;
    // },
    setSearchField: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchTopFreeListing.fulfilled, (state, action) => {
        // Add reducer to createAsyncThunk
        console.log("action payload fetchTopFreeListing", action.payload);
        state.topFreeListing = action.payload.feed.entry;
      })
      .addCase(fetchSuggestions.fulfilled, (state, action) => {
        // Add reducer to createAsyncThunk
        console.log("action payload fetchSuggestions", action.payload);
        state.suggestions = action.payload.feed.entry;
      });
  },
});

// Action creators are generated for each case reducer function

// Export setSearchField as an action
export const { setSearchField } = listingSlice.actions;

// To get the state from global state
export const selectSearch = (state: RootState) => state.listing.search;

export const selectTopFreeListing = (state: RootState) =>
  state.listing.topFreeListing;

export const selectSuggestions = (state: RootState) =>
  state.listing.suggestions;

export default listingSlice.reducer;
