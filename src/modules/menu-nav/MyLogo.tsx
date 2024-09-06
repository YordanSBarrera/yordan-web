import { Box } from "@mui/material";
import myLogo from "../../assets/img/logo-ysb.png";

type MyLogoProps = {
  widthProps?: string;
  linkTo?: string;
};
const MyLogo = ({ widthProps = "150px", linkTo = "#home" }: MyLogoProps) => {
  return (
    <Box component="a" href={linkTo}>
      <img src={myLogo} alt="YSB logo" width={widthProps} />
    </Box>
  );
};

export default MyLogo;
