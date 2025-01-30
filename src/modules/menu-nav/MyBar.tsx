import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Grid2, Stack } from "@mui/material";
import yordanPhoto from "../../assets/img/yordan.jpg";
import { bgDarkCard } from "../../utils/const";
import ContactIcons from "../../components/ContactIcons";
import MyLogo from "../../components/MyLogo";
import {
  aboutRoute,
  contactRoute,
  homeRoute,
  projectRoute,
  skillRoute,
} from "../../routes";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import ChangeLang from "../../components/ChangeLang";

const pages = [
  { name: "projects", link: projectRoute },
  { name: "contact", link: contactRoute },
];
const settings = [
  { name: "aboutMe", link: aboutRoute },
  { name: "skills", link: skillRoute },
  { name: "projects", link: projectRoute },
  { name: "contact", link: contactRoute },
];

const MyBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const littleScreen = useMediaQuery({ minWidth: "500px" });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgBarColor = scrolled ? bgDarkCard : "rgb(0,0,0,0.1)";

  return (
    <AppBar position="fixed" sx={{ backgroundColor: bgBarColor }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <NavLink to={homeRoute}>
              <MyLogo />
            </NavLink>
          </Stack>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink to={page.link} key={page.name}>
                    <Typography textAlign="center" color="black">
                      {t(page.name)}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Stack
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <NavLink to={homeRoute}>
              <MyLogo />
            </NavLink>
          </Stack>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Grid2 container columnSpacing={1}>
              {pages.map((page) => (
                <Grid2 gap={2}>
                  <NavLink to={page.link} key={page.name}>
                    <Typography color="white">{t(page.name)}</Typography>
                  </NavLink>
                </Grid2>
              ))}
            </Grid2>
          </Box>

          {littleScreen && <ContactIcons heightIcons="30px" />}
          <Box alignItems="center" mt={2} ml={2}>
            <ChangeLang />
          </Box>
          <Box sx={{ flexGrow: 0 }} ml={3}>
            <Tooltip title={t("openSettings")}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Yordan" src={yordanPhoto} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <NavLink to={setting.link}>
                    <Typography textAlign="center">
                      {t(setting.name)}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyBar;
