import { Stack, Typography } from "@mui/material";
import { bgDarkCard } from "../../utils/const";
import MyLogo from "../menu-nav/MyLogo";

const Footer = () => {
  return (
    <Stack
      textAlign="center"
      bgcolor={bgDarkCard}
      color="#fff"
      borderRadius={1}
      width="100%"
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <MyLogo widthProps="120px" />
      <Typography variant="body2">
        &copy; 2024 Yordan SB. Todos los derechos reservados.
      </Typography>
    </Stack>
  );
};
export default Footer;
