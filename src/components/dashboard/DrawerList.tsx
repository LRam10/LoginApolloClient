import { redirectTo } from "@contentpi/lib";

import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import { Mail as MailIcon } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

const DrawerList = () => {
  const theme= useTheme();
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Users", "Dashboard","My Profile" ].map((text, index) => (
          <ListItem key={index} disablePadding>
            {/* fix li inside li */}
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem sx={{color:theme.palette.primary.main}} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              onClick={() => redirectTo("/logout")}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DrawerList;
