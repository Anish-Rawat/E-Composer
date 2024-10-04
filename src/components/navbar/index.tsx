import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { APP_LOGO } from '../../utils/iconLinks';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        padding: {
          xs: '8px 20px',   
          sm: '10px 15px', 
        },
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton href="/" sx={{ padding: 0 }}>
            <Box
              component="img"
              src={APP_LOGO}
              alt="App Logo"
              sx={{
                height: { xs: '20px', sm: '30px' },
                width: 'auto', 
              }}
            />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          <MenuItem component={Link} to="/CollectionPage" sx={{ padding: '10px' }}>
            Collection Page
          </MenuItem>
          <MenuItem component={Link} to="/ContactUs" sx={{ padding: '10px' }}>
            Contact Us
          </MenuItem>
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuItem component={Link} to="/CollectionPage" onClick={handleMenuClose}>
              Collection Page
            </MenuItem>
            <MenuItem component={Link} to="/ContactUs" onClick={handleMenuClose}>
              Contact Us
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
