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

import IconifyIcon from "../../components/base/IconifyIcon";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // Validate passwords match
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match. Please try again.");
      return;
    }

    // Send the new password to the backend for update (Assuming the API handles password reset)
    navigate('/'); // Redirect to login page after successful reset
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Box component="figure" mb={5} mx="auto" textAlign="center">
        <Link to=''>
          <Image src='' alt="logo with text" height={60} />
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
            Reset Password
          </Typography>
          <Typography
            variant="h6"
            fontWeight={500}
            textAlign="center"
            color="text.primary"
          >
            Enter your new password.
          </Typography>
          <TextField
            variant="filled"
            label="New Password"
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    size="small"
                    edge="end"
                    sx={{
                      mr: 2,
                    }}
                  >
                    {showNewPassword ? (
                      <IconifyIcon icon="el:eye-open" color="text.secondary" />
                    ) : (
                      <IconifyIcon icon="el:eye-close" color="text.primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="filled"
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    size="small"
                    edge="end"
                    sx={{
                      mr: 2,
                    }}
                  >
                    {showConfirmPassword ? (
                      <IconifyIcon icon="el:eye-open" color="text.secondary" />
                    ) : (
                      <IconifyIcon icon="el:eye-close" color="text.primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={handleSubmit}
            sx={{
              fontWeight: "fontWeightRegular",
            }}
          >
            Reset Password
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

export default ResetPassword;
