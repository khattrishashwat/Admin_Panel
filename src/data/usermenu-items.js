import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";

const userMenuItems = [
  {
    title: "View Profile",
    icon: <HomeIcon />,
  },
  {
    title: "Account Settings",
    icon: <SettingsIcon />,
  },
  {
    title: "Notifications",
    icon: <NotificationsIcon />,
  },
  {
    title: "Switch Account",
    icon: <SwitchAccountIcon />,
  },
  {
    title: "Help Center",
    icon: <HelpIcon />,
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
  },
];

export default userMenuItems;
