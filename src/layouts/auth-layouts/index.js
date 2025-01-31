// import React from "react";
// import { Box, Stack } from "@mui/material";

// const AuthLayout = ({ children }) => {
//   return (
//     <Stack minHeight="100vh" justifyContent="center" py={10}>
//       <Box maxWidth={640} width="100%" mx="auto" px={5}>
//         {children}
//       </Box>
//     </Stack>
//   );
// };

// export default AuthLayout;

import React from "react";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom"; // Import Outlet to render other routes

const AuthLayout = ({ children }) => {
  const token = localStorage.getItem("token");

  // If there's no token, render the Outlet (redirecting or displaying auth-related pages)
  if (!token) {
    return <Outlet />;
  }

  return (
    <Stack minHeight="100vh" justifyContent="center" py={10}>
      <Box maxWidth={640} width="100%" mx="auto" px={5}>
        {children}
      </Box>
    </Stack>
  );
};

export default AuthLayout;
