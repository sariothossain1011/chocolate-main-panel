// Import necessary functions
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {  IAddToCart, IStoreItem } from "@/types/index";

// Define the WishlistState interface
export interface WishlistState {
  wishlistItems: IStoreItem[];
  wishlistCount: number;
}

// Function to load wishlist from local storage
const loadWishlistFromLocalStorage = (): WishlistState => {
  const storedWishlist =
    typeof window !== "undefined" ? localStorage.getItem("wishlist") : null;
  if (storedWishlist) {
    try {
      const parsedWishlist = JSON.parse(storedWishlist);
      return {
        wishlistItems: Array.isArray(parsedWishlist.wishlistItems)
          ? parsedWishlist.wishlistItems
          : [],
        wishlistCount: parsedWishlist.wishlistCount || 0,
      };
    } catch (error) {
      console.error("Error parsing wishlist:", error);
      return { wishlistItems: [], wishlistCount: 0 };
    }
  }
  return { wishlistItems: [], wishlistCount: 0 };
};

// Initial state
const initialState: WishlistState = loadWishlistFromLocalStorage();

// Function to save wishlist to local storage
const saveWishlistToLocalStorage = (state: WishlistState) => {
  typeof window !== "undefined" &&
    localStorage.setItem("wishlist", JSON.stringify(state));
};

// Create the wishlist slice
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist: (state, action: PayloadAction<IAddToCart>) => {
      const newItem = action.payload;
      const existingItemIndex = state.wishlistItems.findIndex(
          (item) => item.id === newItem.id
      );
      if (existingItemIndex === -1) {
          state.wishlistItems.push({
              ...newItem,
              uuid: uuidv4(),
              date: Date(), 
          });
      }
      state.wishlistCount = state.wishlistItems.length;
      saveWishlistToLocalStorage(state);
  },

    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.uuid !== action.payload
      );
      state.wishlistCount = state.wishlistItems.length;
      saveWishlistToLocalStorage(state);
    },

  },
});

// Export actions and reducer
export const {
    setWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
