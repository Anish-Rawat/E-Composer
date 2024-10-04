import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Drawer,
  Slider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { brands, colors, collections } from "../../../utils/mockData";
import { setPriceRange } from "../../../features/furnitureSlice";

interface FilterSidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ open, setOpen }) => {
  const [expandedPanels, setExpandedPanels] = useState<string[]>([]);
  const [priceRange, setPriceRangeState] = useState<number[]>([0, 500]); 
  const dispatch = useDispatch(); 

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handlePriceChange = (newValue: number | number[]) => {
    setPriceRangeState(newValue as number[]); 
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setPriceRange(priceRange)); 
    }, 300); 

    return () => clearTimeout(timeoutId);
  }, [priceRange, dispatch]);

  const handleAccordionChange = (panel: string) => () => {
    setExpandedPanels((prev) =>
      prev.includes(panel) ? prev.filter((p) => p !== panel) : [...prev, panel]
    );
  };

  return (
    <Box data-aos="fade-right">
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            width: 250,
            padding: "20px",
            position: "relative",
            boxShadow: "none",
          },
        }}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            top: 5,
            right: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Accordion
          expanded={expandedPanels.includes("collections")}
          onChange={handleAccordionChange("collections")}
          disableGutters
          elevation={0}
          sx={{
            backgroundColor: "transparent",
            "&.Mui-expanded": {
              backgroundColor: "transparent",
            },
            pt: "20px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Collections</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {collections?.map((collection, index) => (
                <ListItem
                  key={index}
                  component="div"
                  onClick={(e) => e.preventDefault()}
                  sx={{
                    "& .MuiListItemText-root": {
                      color: "black",
                      transition: "color 0.3s ease",
                    },
                    "&:hover .MuiListItemText-root": {
                      color: "red",
                    },
                  }}
                >
                  <ListItemText primary={collection} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Price
        </Typography>
        <Slider
          value={priceRange}
          min={0}
          max={500}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          sx={{ color: "red" }}
        />

        <Accordion
          expanded={expandedPanels.includes("brands")}
          onChange={handleAccordionChange("brands")}
          disableGutters
          elevation={0}
          sx={{
            backgroundColor: "transparent",
            "&.Mui-expanded": {
              backgroundColor: "transparent",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Brand</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {brands?.map((brand) => (
                <ListItem component="li" key={brand.id}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={`${brand?.name} (${brand?.count})`}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedPanels.includes("colors")}
          onChange={handleAccordionChange("colors")}
          disableGutters
          elevation={0}
          sx={{
            backgroundColor: "transparent",
            "&.Mui-expanded": {
              backgroundColor: "transparent",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Color</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {colors?.map((color) => (
                <ListItem component="li" key={color?.id}>
                  <ListItemText
                    primary={
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <span
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            backgroundColor: color.name.toLowerCase(),
                            marginRight: 8,
                          }}
                        />
                        {color?.name} ({color?.count})
                      </span>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Drawer>
    </Box>
  );
};

export default FilterSidebar;
