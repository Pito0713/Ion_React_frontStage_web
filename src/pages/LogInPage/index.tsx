import * as React from 'react';
import cookie from 'react-cookies';
import { CookieSerializeOptions } from "cookie";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom"

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#9052cc',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

export default function LogInPage() {
  let navigate = useNavigate()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const options: CookieSerializeOptions = { /* options */ };
    cookie.save("account",data.get('account') as string ,options);
    cookie.save("password",data.get('password') as string,options);
    navigate('/mainPage')
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography 
            component="h1" 
            variant="h4" 
            sx={{
              margin: 4,
            }}
          >
            登入
          </Typography>
          <Box
            component="form" 
            onSubmit={handleSubmit}  
            sx={{
              padding: 4,
              bgcolor: 'secondary.main'
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="account"
              label="Account"
              id="account"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ padding: 1.5, bgcolor: 'primary.main', mb: 2}}
            >
              Sign In
            </Button>
            <Grid container>
                <Link href="#" >
                  Forgot password? & Don't have an account? Sign Up
                </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}