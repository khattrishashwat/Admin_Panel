import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import IconifyIcon from "../../../components/base/IconifyIcon";
import { NavItem as NavItemProps } from "../../../data/nav-items";

const NavItem = ({ navItem, open }) => {
  const { pathname } = useLocation();
  const isActive = pathname === navItem.path;

  return (
    <ListItem
      disablePadding
      sx={(theme) => ({
        display: "block",
        px: 5,
        borderRight: !open
          ? isActive
            ? `3px solid ${theme.palette.primary.main}`
            : `3px solid transparent`
          : "",
      })}
    >
      <ListItemButton
        component={Link}
        to={navItem.path}
        sx={(theme) => ({
          opacity: navItem.active ? 1 : 0.5,
          bgcolor: isActive
            ? open
              ? theme.palette.primary.main
              : ""
            : theme.palette.background.default,
          "&:hover": {
            bgcolor: isActive
              ? open
                ? theme.palette.primary.dark
                : theme.palette.background.paper
              : theme.palette.background.paper,
          },
          "& .MuiTouchRipple-root": {
            color: isActive
              ? theme.palette.primary.main
              : theme.palette.text.disabled,
          },
        })}
      >
        <ListItemIcon
          sx={(theme) => ({
            width: 20,
            height: 20,
            mr: open ? "auto" : 0,
            color: isActive
              ? open
                ? theme.palette.background.default
                : theme.palette.primary.main
              : theme.palette.text.primary,
          })}
        >
          <IconifyIcon icon={navItem.icon} width={20} height={20} />
        </ListItemIcon>
        <ListItemText
          primary={navItem.title}
          sx={(theme) => ({
            display: open ? "inline-block" : "none",
            opacity: open ? 1 : 0,
            color: isActive
              ? theme.palette.background.default
              : theme.palette.text.primary,
          })}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
