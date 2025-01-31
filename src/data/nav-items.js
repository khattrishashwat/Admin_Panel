import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const navItems = [
  {
    path: "/",
    title: "Dashboard",
    icon: <HomeIcon />,
    active: true,
  },
  {
    path: "#!",
    title: "Profile",
    icon: <PersonIcon />,
    active: false,
  },
  {
    path: "#!",
    title: "Leaderboard",
    icon: <LeaderboardIcon />,
    active: false,
  },
  {
    path: "#!",
    title: "Order",
    icon: <ShoppingCartIcon />,
    active: false,
  },
  {
    path: "#!",
    title: "Product",
    icon: <ShoppingBagIcon />,
    active: false,
  },
  {
    path: "#!",
    title: "Sales Report",
    icon: <ShowChartIcon />,
    active: false,
  },
  {
    path: "#!",
    title: "Message",
    icon: <ChatIcon />,
    active: false,
  },
  {
    path: "#!",
    title: "Settings",
    icon: <SettingsIcon />,
    active: false,
  },
  {
    path: "#!",
    title: "Favourite",
    icon: <FavoriteIcon />,
    active: false,
  },
  {
    path: "#!",
    title: "History",
    icon: <HistoryIcon />,
    active: false,
  },
  {
    path: "authentication/login",
    title: "Login",
    icon: <LoginIcon />,
    active: true,
  },
  {
    path: "authentication/sign-up",
    title: "Sign Up",
    icon: <PersonAddIcon />,
    active: true,
  },
];

export default navItems;
