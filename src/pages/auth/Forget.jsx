import {
  Box,
  Link,
  Paper,
  Stack,
  Button,
  Divider,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../components/base/Image";
// import logoWithText from "";
import Swal from "sweetalert2";
import IconifyIcon from "../../components/base/IconifyIcon";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleSubmit = () => {
    // Send email/phone to backend for verification
    // If successful, show the verification popup
    Swal.fire({
      title: "Enter the 4-digit code",
      input: "text",
      inputAttributes: {
        maxlength: 4,
        autocapitalize: "off",
        autocorrect: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Verify",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value || value.length !== 4) {
          return "Please enter a valid 4-digit code";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the verification success, like navigating to reset password page
        navigate("/authentication/reset-password");
      }
    });
  };

  const handleChange = (e) => {
    setEmailOrPhone(e.target.value);
  };

  return (
    <>
      <Box component="figure" mb={5} mx="auto" textAlign="center">
        <Link to=''>
          <Image src=
          "" alt="logo with text" height={60} />
        </Link>
      </Box>
      <Paper
        sx={{
          py: 6,
          px: { xs: 5, sm: 7.5 },
        }}
      >
        <Stack justifyContent="center" gap={5}>
          <Typography variant="h3" textAlign="center" color="text.secondary">
            Forgot Password
          </Typography>
          <Typography
            variant="h6"
            fontWeight={500}
            textAlign="center"
            color="text.primary"
          >
            Enter your email or phone number to receive a verification code.
          </Typography>
          <TextField
            variant="filled"
            label="Email or Phone Number"
            type="text"
            value={emailOrPhone}
            onChange={handleChange}
            sx={{
              ".MuiFilledInput-root": {
                bgcolor: "grey.A100",
                ":hover": {
                  bgcolor: "background.default",
                },
                ":focus": {
                  bgcolor: "background.default",
                },
                ":focus-within": {
                  bgcolor: "background.default",
                },
              },
              borderRadius: 2,
            }}
          />
          <Button
            onClick={handleSubmit}
            sx={{
              fontWeight: "fontWeightRegular",
            }}
          >
            Send Verification Code
          </Button>

          <Divider />
          <Typography textAlign="center" color="text.secondary" variant="body1">
            Or return to{" "}
            <Link href="/authentication/login" underline="none">
              Log In
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default ForgotPassword;
