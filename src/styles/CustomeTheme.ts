import { createTheme } from "@mui/material/";

declare module '@mui/material/styles' {
// allow configuration using `createTheme`
 interface ThemeOptions {
      [key:string]:any;
    }
  }
  const palette = {
    primary:{main:'#006494'},
    secondary:{main:'#4EC5DD'},
    custom:{main:'#C7E8AC'},
    error:{main:'#ED1D25'},
    success:{main:'#35ED1D'}

}
const theme = createTheme({palette});
export default theme;