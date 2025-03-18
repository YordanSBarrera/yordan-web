import { Box, styled } from "@mui/material";
import myLogo from "../assets/img/logo-ysb.png";
import { homeRoute } from "../routes";
import { NavLink } from "react-router-dom";

const AnimatedLogo = styled('img')`
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease;
  &:hover {
    transform: scale(1.08) rotate(2deg);
    filter: brightness(1.15) contrast(1.1);
  }
`;

type MyLogoProps = {
  widthProps?: string;
  linkTo?: string;
};

const MyLogo = ({ widthProps = "150px", linkTo = homeRoute }: MyLogoProps) => {
  return (
    <NavLink to={linkTo}>
      <Box component="span">
        <AnimatedLogo src={myLogo} alt="YSB logo" width={widthProps} />
      </Box>
    </NavLink>
  );
};

export default MyLogo;
