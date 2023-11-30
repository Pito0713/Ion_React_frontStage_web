import * as React from "react";
import * as mui from "@mui/material";

export default function FormPropsTextFields() {
  const [info, setInfo] = React.useState({});
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setInfo(data);
  };

  return (
    <mui.Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        padding: 4,
        bgcolor: "#ffffff",
      }}>
      <mui.Typography
        component="h1"
        variant="h4"
        >
        add
      </mui.Typography>
      <mui.TextField
        margin="normal"
        required
        fullWidth
        name="name"
        label="name"
        id="name"
      />
      <mui.TextField
        margin="normal"
        required
        fullWidth
        name="account"
        label="account"
        id="account"
      />
      <mui.TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <mui.TextField
        margin="normal"
        required
        fullWidth
        name="PasswordAgain"
        label="PasswordAgain"
        type="password"
        id="PasswordAgain"
      />
      <mui.Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ padding: 1.5, bgcolor: "primary.main", mt: 2 }}>
        Sign In
      </mui.Button>
    </mui.Box>
  );
}
