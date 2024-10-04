import React from "react";
import {  CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
// Yaha Card USAGE KR SAKTE H 
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

interface Product {
  id: number;
  name: string;
  price: string;
  image1: string;
  image2?: string;
  image3?: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, image1 } = product;

  return (
    <Box sx={{ width: "100%", height: "100%" , pb:"10px"}}> 
      <CardMedia
        component="img"
        image={image1}
        alt={name}
        sx={{
          height: "auto",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: "bold", mt: 1 }}
          >
            {price}
          </Typography>
        </Box>
      </CardContent>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          height: "1px",
          width: "100%",
          backgroundColor: "gray", 
          alignItems: "center",
        }}
      />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        pt={1}
      >
        <Button
          variant="outlined"
          sx={{
            border: "none",
            color: "black",
            padding: "10px 20px",
          }}
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          Add To Cart
        </Button>

        <Button
          variant="outlined"
          sx={{
            border: "none",
            color: "black",
          }}
          startIcon={<FavoriteBorderOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default ProductCard;
