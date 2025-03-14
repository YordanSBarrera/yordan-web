import { Box } from "@mui/material";
import myLogo from "../assets/img/logo-ysb.png";
import { homeRoute } from "../routes";
import { NavLink } from "react-router-dom";

type MyLogoProps = {
  widthProps?: string;
  linkTo?: string;
};

const MyLogo = ({ widthProps = "150px", linkTo = homeRoute }: MyLogoProps) => {
  return (
    <NavLink to={linkTo}>
      <Box component="span">
        <img src={myLogo} alt="YSB logo" width={widthProps} />
      </Box>
    </NavLink>
  );
};

export default MyLogo;
