import { createSlice } from "@reduxjs/toolkit";
import { furnitureList, FurnitureListState } from "../utils/mockData";

interface FurnituresState {
  originalFurnitures: FurnitureListState[];
  displayedFurniture: FurnitureListState[];
  priceRange: number[]; 
}

const initialState: FurnituresState = {
  originalFurnitures: furnitureList,
  displayedFurniture: furnitureList,
  priceRange: [0, 1000], 
};

const furnitureSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {
    filterFurnitureData: (state, action) => {
      const sortOption = action.payload;
  
      switch (sortOption) {
        case "PriceLowToHigh":
          state.displayedFurniture = [...state.originalFurnitures].sort(
            (a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
          );
          break;
        case "PriceHighToLow":
          state.displayedFurniture = [...state.originalFurnitures].sort(
            (a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, ""))
          );
          break;
        case "AlphabeticalAZ":
          state.displayedFurniture = [...state.originalFurnitures].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          break;
        case "AlphabeticalZA":
          state.displayedFurniture = [...state.originalFurnitures].sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          break;
        default:
          state.displayedFurniture = state.originalFurnitures;
      }
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;

      state.displayedFurniture = state.originalFurnitures.filter(
        (furniture) => {
          const price = parseFloat(furniture.price.replace(/[^0-9.-]+/g, ""));
          return price >= action.payload[0] && price <= action.payload[1];
        }
      );
    },
  },
});

export default furnitureSlice.reducer;
export const { filterFurnitureData, setPriceRange } = furnitureSlice.actions;
