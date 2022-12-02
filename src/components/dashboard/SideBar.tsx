import React, {FC} from "react";
import DrawerList from "./DrawerList";
import Drawer from "@mui/material/Drawer";

interface IProps{
  isDrawer:boolean
  handleCloseDrawer:any
}
const SideBar:FC<IProps> = ({isDrawer,handleCloseDrawer}) => {
  return (
    <Drawer anchor="left" open={isDrawer} onClose={handleCloseDrawer} 
    PaperProps={{style:{
      backgroundColor:'#f9f9f9'
    }}} >
      <DrawerList />
    </Drawer>
  );
};

export default SideBar;
