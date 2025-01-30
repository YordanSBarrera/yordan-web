import TranslateIcon from "@mui/icons-material/Translate";
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import flagSpain from "../assets/icons/flag-spain.png";
import flagUSA from "../assets/icons/flag-usa.png";
import { useTranslation } from "react-i18next";

const ChangeLang = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const changeLngEs = () => {
    i18n.changeLanguage("es");
    handleCloseMenu();
  };
  const changeLngEn = () => {
    i18n.changeLanguage("en");
    handleCloseMenu();
  };

  return (
    <>
      <Tooltip title={t("changeLng")}>
        <IconButton
          onClick={handleOpenMenu}
          sx={{
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <TranslateIcon sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={changeLngEs}>
          <img src={flagSpain} alt={t("spainFlag")} height="30px" />
          <Typography>{t("spain")}</Typography>
        </MenuItem>
        <MenuItem onClick={changeLngEn}>
          <img src={flagUSA} alt={t("usaFlag")} height="30px" />
          <Typography>{t("english")}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ChangeLang;
