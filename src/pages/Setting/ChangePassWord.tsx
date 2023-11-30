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
        ChangePassWord
      </mui.Typography>

      <mui.TextField
        margin="normal"
        required
        fullWidth
        name="oldpassword"
        label="oldpassword"
        type="password"
        id="oldpassword"
      />
      <mui.TextField
        margin="normal"
        required
        fullWidth
        name="newpassword"
        label="newpassword"
        type="password"
        id="newpassword"
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
