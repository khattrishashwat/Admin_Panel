import React from "react";
import { Drawer, List, Toolbar, Link } from "@mui/material";
import SimpleBar from "simplebar-react";
import NavItem from "./NavItem";
import navItems from "../../../data/nav-items";
import Image from "../../../components/base/Image";



const drawerWidth = 240;
const closedDrawerWidth = 80;

const Sidebar = ({ open }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : closedDrawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : closedDrawerWidth,
          boxSizing: "border-box",
          transition: "width 0.3s ease-in-out",
        },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Link to=''>
          <Image
            src=''
            alt=''
            height={40}
          />
        </Link>
      </Toolbar>
      <SimpleBar style={{ maxHeight: "calc(100vh - 64px)" }}>
        <List component="nav" sx={{ mt: 2, py: 2 }}>
          {navItems.map((navItem) => (
            <NavItem key={navItem.id} navItem={navItem} open={open} />
          ))}
        </List>
      </SimpleBar>
    </Drawer>
  );
};

export default Sidebar;
