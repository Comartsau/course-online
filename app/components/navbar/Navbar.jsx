"use client";
import * as React from "react";
import {
  styled,
  alpha,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      custom: 1300, // Custom breakpoint
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const menuItems = [
  { icon: <MailIcon />, text: "หน้าหลัก", path: "/" },
  { icon: <NotificationsIcon />, text: "โบรกเกอร์", path: "/pages/broker" },
  { icon: <NotificationsIcon />, text: "EBook", path: "/pages/ebook" },
  { icon: <NotificationsIcon />, text: "เกี่ยวกับเรา", path: "/pages/about" },
  { icon: <NotificationsIcon />, text: "ผลงาน", path: "/pages/portfolio" },
  { icon: <NotificationsIcon />, text: "กิจกรรม", path: "/pages/events" },
  {
    icon: <NotificationsIcon />,
    text: "วิธีการซื้อคอร์ส",
    path: "/pages/how-to-buy",
  },
  { icon: <NotificationsIcon />, text: "ติดต่อเรา", path: "/pages/contact" },
];

const MenuItemComponent = ({ item, handleNavigation }) => (
  <div className="">
    <IconButton
      aria-label={item.text}
      onClick={() => handleNavigation(item.path)}
      color="inherit"
      className="text-base"
    >
      {item.text}
    </IconButton>
  </div>
);

export default function AppBarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const router = useRouter();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {menuItems
        .filter((item) => item.text === "Profile")
        .map((item, index) => (
          <MenuItem key={index} onClick={handleMenuClose}>
            {item.text}
          </MenuItem>
        ))}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      {menuItems.map((item, index) => (
        <MenuItem key={index} onClick={() => handleNavigation(item.path)}>
          <p>{item.text}</p>
        </MenuItem>
      ))}
      <div className="flex flex-col w-full   items-center align-middle justify-center gap-3">
        <Box className="w-full mt-3 px-2">
          <Button
            size="small"
            color="inherit"
            variant="outlined"
            className="p-2  w-full"
          >
            เข้าสู่ระบบ
          </Button>
        </Box>
        <Box className="w-full px-2 ">
          <Button
            size="small"
            variant="outlined"
            className="bg-green-800 opacity-75 border-green-800 text-white hover:border-white hover:bg-green-700 py-2 w-full"
          >
            สมัครสมาชิก
          </Button>
        </Box>
      </div>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg-green-600 opacity-95  ">
          <Toolbar>
            <div className="flex w-full justify-between items-center ">
              <div className="flex">
                <Typography>
                  <Image
                    src="/logo.png"
                    alt="Course Online Logo"
                    priority
                    width={150}
                    height={100}
                  />
                </Typography>

                <Search className="xl:w-[200px] 2xl:w-[350px]">
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </div>

              <div className="xl:w-[700px] 2xl:w-[700px]">
                <Box
                  sx={{ display: { xs: "none", custom: "flex" } }}
                  className="w-full justify-around"

                >
                  {menuItems.map((item, index) => (
                    <MenuItemComponent
                      key={index}
                      item={item}
                      handleNavigation={handleNavigation}
                    />
                  ))}
                </Box>
              </div>
              <div className="flex gap-3">
                <Box
                  className="items-center align-middle"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  <Button
                    size="small"
                    color="inherit"
                    variant="outlined"
                    className="py-2 w-[100px]"
                  >
                    เข้าสู่ระบบ
                  </Button>
                </Box>
                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                  <Button
                    size="small"
                    variant="outlined"
                    className="bg-green-800 opacity-75 border-green-800 text-white hover:border-white hover:bg-green-700 py-2 w-[100px]"
                  >
                    สมัครสมาชิก
                  </Button>
                </Box>
              </div>
            </div>

            <Box sx={{ display: { xs: "flex", custom: "none" } }}>
              <IconButton
                size="small"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </ThemeProvider>
  );
}
