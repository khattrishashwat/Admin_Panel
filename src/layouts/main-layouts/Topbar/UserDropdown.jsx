import React, { useState, useCallback } from "react";
import {
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import IconifyIcon from "../../../components/base/IconifyIcon"; // Custom Iconify component
import profile from "../../../assets/images/account/Profile.png"; // User profile image
import userMenuItems from "../../../data/usermenu-items"; // Data for menu items

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  // Handle menu open on button click
  const handleUserClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  // Handle menu close when an item is clicked
  const handleUserClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button
        color="inherit"
        variant="text"
        id="account-dropdown-menu"
        aria-controls={menuOpen ? "account-dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
        onClick={handleUserClick}
        disableRipple
        sx={{
          borderRadius: 2,
          gap: 3.75,
          px: { xs: 0, sm: 0.625 },
          py: 0.625,
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        {/* Tooltip with user name */}
        <Tooltip title="khattri" arrow placement="bottom">
          <Avatar src={profile} sx={{ width: 44, height: 44 }} />
        </Tooltip>

        {/* IconifyIcon with rotate effect when menu is open */}
        <IconifyIcon
          color="common.white"
          icon="mingcute:down-fill"
          width={22.5}
          height={22.5}
          sx={(theme) => ({
            transform: menuOpen ? `rotate(180deg)` : `rotate(0deg)`,
            transition: theme.transitions.create("all", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.short,
            }),
          })}
        />
      </Button>

      {/* Menu with items from userMenuItems */}
      <Menu
        id="account-dropdown-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleUserClose}
        MenuListProps={{
          "aria-labelledby": "account-dropdown-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {userMenuItems.map((userMenuItem) => (
          <MenuItem key={userMenuItem.id} onClick={handleUserClose}>
            {/* Menu item icon */}
            <ListItemIcon
              sx={{
                minWidth: "0 !important",
                color: userMenuItem.color,
                width: 14,
                height: 10,
                mb: 1.5,
              }}
            >
              <IconifyIcon
                icon={userMenuItem.icon}
                color={userMenuItem.color}
              />
            </ListItemIcon>

            {/* Menu item title */}
            <ListItemText
              sx={(theme) => ({
                color: userMenuItem.color,
                "& .MuiListItemText-primary": {
                  fontSize: theme.typography.subtitle2.fontSize,
                  fontFamily: theme.typography.subtitle2.fontFamily,
                  fontWeight: theme.typography.subtitle2.fontWeight,
                },
              })}
            >
              {userMenuItem.title}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserDropdown;
