// Import necessary functions
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {  IAddToCart, IStoreItem } from "@/types/index";
import { RootState } from "../store/Store";

// Define the interface for an individual wishlist item

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
        (item) =>
          item.id === newItem.id &&
          item.title === newItem.title &&
          item.quantity === newItem.quantity
      );

      if (existingItemIndex === -1) {
        state.wishlistItems.push({
          ...newItem,
          uuid: uuidv4(),
          quantity: newItem.quantity || 1,
          date: Date(),
        });
      } else {
        const existingItem = state.wishlistItems[existingItemIndex];
        existingItem.quantity =
          (existingItem.quantity || 0) + (newItem.quantity || 1);
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
    wishlistIncrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.uuid === action.payload
      );

      if (itemIndex !== -1) {
        state.wishlistItems[itemIndex].quantity =
          (state.wishlistItems[itemIndex].quantity || 1) + 1;
        state.wishlistCount = state.wishlistItems.length;
        saveWishlistToLocalStorage(state);
      }
    },
    wishlistDecrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.uuid === action.payload
      );

      if (itemIndex !== -1) {
        if (
          state.wishlistItems[itemIndex].quantity &&
          state.wishlistItems[itemIndex].quantity > 1
        ) {
          state.wishlistItems[itemIndex].quantity -= 1;
        } else {
          state.wishlistItems = state.wishlistItems.filter(
            (item) => item.uuid !== action.payload
          );
        }
        state.wishlistCount = state.wishlistItems.length;
        saveWishlistToLocalStorage(state);
      }
    },
  },
});

// Selector to check if an item is in the wishlist
export const selectIsInWishlist = createSelector(
  (state: RootState) => state.wishlist.wishlistItems,
  (state: RootState, id: number, title: string, quantity: number) => ({
    id,
    title,
    quantity,
  }),
  (wishlistItems, { id, title, quantity }) => {
    return wishlistItems.some(
      (item) =>
        item.id === id &&
        item.title === title &&
        item.quantity === quantity
    );
  }
);

// Export actions and reducer
export const {
    setWishlist,
  removeFromWishlist,
  wishlistIncrementQuantity,
  wishlistDecrementQuantity,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
