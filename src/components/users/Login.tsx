import React, { FC, ReactElement, useState, ChangeEvent } from "react";
import { redirectTo } from "@contentpi/lib";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { IUser } from "../../types";
interface IProps {
  login(input: any): any;
  currentUrl: string;
}
const Login: FC<IProps> = ({ login, currentUrl }):ReactElement => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);

  //form state
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = e;
    if (name) {
      setValues((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
  }

  const handleClose = (event:React.SyntheticEvent | Event, reason?: string)=>{
    if (reason === 'clickaway') {
        return;
      }
      setInvalidLogin(false)
  }
  const handleSubmit = async (user: IUser): Promise<void> => {
    //we execute the login mutation
    const response = await login(user);
    if (response.error) {
      setInvalidLogin(true);
      setErrorMessage(response.message);
    } else {
      console.log(currentUrl + 'Login.tsx');
      redirectTo(currentUrl || "/");
    }
  };
  return (
    <Container
      style={{
        background:
          "url(https://res.cloudinary.com/doei459zd/image/upload/v1669736002/samples/backgroung-login_klbdnk.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "2.5rem",
        paddingBottom:"2.5rem",
        height:'100vh'
      }}
      maxWidth="xl"
    >
        <Snackbar 
        open={invalidLogin}
        autoHideDuration={5000}
        onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
        </Snackbar>
      <Box
        component="form"
        sx={{
          height: 550,
          width: 450,
          borderRadius: 7,
          margin: "0 auto",
          background: "#f9f9f9",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "90%", margin: "0 auto" }}>
          <h1>Login</h1>
          <FormControl sx={{ m: 1,width:'100%' }} variant="filled">
            <InputLabel htmlFor="filled-adornment">Email</InputLabel>
            <FilledInput
              name="email"
              style={{ width: "100%" }}
              id="filled-adornment-email"
              value={values.email}
              onChange={onChange}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width:'100%'}} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              style={{ width: "100%" }}
              id="filled-adornment-password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
              <Button variant='contained'
              size="large"
              sx={{m:1,width:'100%'}} 
              onClick={():Promise<void>=>handleSubmit(values)}>Login</Button>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
