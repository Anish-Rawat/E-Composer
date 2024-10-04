import { createSlice } from "@reduxjs/toolkit";
import { furnitureList, FurnitureListState } from "../utils/mockData";

interface FurnituresState {
  originalFurnitures: FurnitureListState[];
  displayedFurniture: FurnitureListState[];
}

const initialState: FurnituresState = {
  originalFurnitures: furnitureList,
  displayedFurniture: furnitureList,
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
    },
  });
  
export default furnitureSlice.reducer;
export const {filterFurnitureData} = furnitureSlice.actions;