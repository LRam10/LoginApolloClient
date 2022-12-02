import { useState,FC } from "react";
import { NavLink } from "react-router-dom";

//material ui
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import {Toolbar } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import { Menu as MenuIcon} from '@mui/icons-material';
import SideBar from "../dashboard/SideBar";
import Typography from "@mui/material/Typography";

interface IProps{
  connectedUser:any
}
const NavBar:FC<IProps> = ({connectedUser}) => {
    const theme = useTheme();
    const selectedStyle = {
        color:'#fff'
    }
    const [isDrawer, setIsDrawer] = useState(false);
    const handleCloseDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsDrawer(false);
  };
  return (
    <>
    
    <AppBar position="sticky" color="inherit" sx={{paddingY:1,backgroundColor:theme.palette.primary.main}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            
              <IconButton
              onClick={()=>(setIsDrawer(true))}
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ 
              mr: 1,
              color:'#fff' }}
            >
              <MenuIcon />
            </IconButton>
            
          
            <MenuItem ><NavLink style={({isActive})=> isActive ? selectedStyle : undefined} to="/" end>Home</NavLink></MenuItem>
            
          </Box>
          <Box sx={{ flexGrow: 1,flex:'inherit'} }>
          <Typography sx={{color:'#fff'}}>Hello, {connectedUser.username}</Typography>
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
    <SideBar isDrawer={isDrawer} handleCloseDrawer={handleCloseDrawer}/>
    
    </>
  );
};

export default NavBar;