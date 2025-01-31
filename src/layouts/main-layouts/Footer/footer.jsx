import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { useBreakpoints } from "../../../providers/BreakpointsProvider";

const Footer = ({ open }) => {
  const { down } = useBreakpoints();
  const isMobileScreen = down("sm");

  return (
    <Stack
      component="footer"
      direction="row"
      justifyContent={{ xs: "center", sm: "flex-end" }}
      ml={isMobileScreen ? 0 : open ? 60 : 27.5}
      pr={{ xs: 3, sm: 5.175 }}
      pb={6.25}
      pl={{ xs: 3, sm: 5.25 }}
    >
      <Typography
        variant="subtitle1"
        sx={{ textAlign: { xs: "center", sm: "right" } }}
      >
        Made with{" "}
        <Box
          component="span"
          sx={{ color: "error.main", verticalAlign: "middle" }}
        >
          &#10084;
        </Box>{" "}
        by Khattri Dev
        <Link
          target="_blank"
          rel="noopener"
          aria-label=""
          sx={{ color: "text.primary", "&:hover": { color: "primary.main" } }}
        ></Link>
      </Typography>
    </Stack>
  );
};

export default Footer;
