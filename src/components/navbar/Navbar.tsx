import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import {Toolbar } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/";

import { NavLink } from "react-router-dom";

const NavBar = () => {
    const theme = useTheme();
    const selectedStyle = {
        color:'#fff'
    }
  return (
    <AppBar position="sticky" color="inherit" sx={{paddingY:1,backgroundColor:theme.palette.primary.main}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem ><NavLink style={({isActive})=> isActive ? selectedStyle : undefined} to="/" end>Home</NavLink></MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;