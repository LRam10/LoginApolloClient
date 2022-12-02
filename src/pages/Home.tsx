import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import DashboardIcon from '@mui/icons-material/Dashboard';
const Home = () => {
  return (
    <Box className='home' sx={{display:'flex',height:'100vh',alignItems:'center'}}>
      <Fab variant="extended" href="/dashboard" sx={{m:'auto'}}>
          <DashboardIcon sx={{mr:2}}/>
           Go to Dashboard
      </Fab>
    </Box>
  )
}
export default Home;
