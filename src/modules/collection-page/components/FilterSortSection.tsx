import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  Select,
  Typography,
  IconButton,
} from "@mui/material";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import ViewCozySharpIcon from "@mui/icons-material/ViewCozySharp";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewCompactSharpIcon from "@mui/icons-material/ViewCompactSharp";
import { SelectChangeEvent } from "@mui/material";
import { FurnitureListState, sortOptions } from "../../../utils/mockData";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { filterFurnitureData } from "../../../features/furnitureSlice";
import ProductCard from "../../../components/ProductCard";
import FilterSidebar from "./FilterSidebar";

const FilterSortSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  const [itemsPerRow, setItemsPerRow] = useState<number>(4);
  const [sortOption, setSortOption] = useState<string>("Featured");

  const dispatch = useDispatch();
  const furnitureList: FurnitureListState[] = useSelector(
    (state: RootState) => state.furniture.displayedFurniture
  );

  const handleGridChange = (items: number) => {
    setItemsPerRow(items);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const selectedSortOption = event.target.value;
    setSortOption(selectedSortOption);
    
    dispatch(filterFurnitureData(selectedSortOption));
  };

  const handleFilterSidebar = ()=>{
    setOpen(true);
  }

  const gridTemplateColumns = {
    xs: "repeat(1, 1fr)", 
    sm: `repeat(${itemsPerRow > 2 ? 2 : itemsPerRow}, 1fr)`, 
    md: `repeat(${itemsPerRow}, 1fr)`,
  };

  return (
    <Box px={{ xs: 2, sm: 5, md: 10, lg: 20 }} sx={{ boxSizing: "border-box" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        pt={2}
      >
        <Button
          variant="outlined"
          sx={{
            border: "none",
            color: "black",
            padding: "10px 20px",
          }}
          startIcon={<TuneSharpIcon />}
          onClick={handleFilterSidebar}
        >
          Filter
        </Button>

        <Box display="inline-flex" alignItems="center">
          <Typography>Sort by:</Typography>
          <Select
            value={sortOption}
            onChange={handleSortChange}
            displayEmpty
            sx={{
              ml: 1,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <ButtonGroup>
          <IconButton onClick={() => handleGridChange(2)}>
            <ViewCozySharpIcon />
          </IconButton>
          <IconButton onClick={() => handleGridChange(3)}>
            <ViewModuleIcon />
          </IconButton>
          <IconButton onClick={() => handleGridChange(4)}>
            <ViewCompactSharpIcon />
          </IconButton>
        </ButtonGroup>
      </Box>
      
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: gridTemplateColumns.xs, 
            sm: gridTemplateColumns.sm, 
            md: gridTemplateColumns.md, 
          },
          gap: 3,
          p: 2,
          maxWidth: "100%",
          overflowX: "hidden",
        }}
        
      >
        {furnitureList?.map((product, index) => (
          <Box key={index} sx={{ width: "100%" }} >
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>

      <Box display="flex" justifyContent="center" py={4}>
        <Button
          variant="outlined"
          sx={{
            borderColor: "black",
            color: "black",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
            padding: "10px 20px",
          }}
        >
          Show More Products
        </Button>
      </Box>
      {
        open && <FilterSidebar open={open} setOpen={setOpen}/>
      }
    </Box>
  );
};

export default FilterSortSection;
