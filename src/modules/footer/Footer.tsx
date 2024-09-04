import { Stack, Typography } from "@mui/material";
import { bgDarkCard } from "../../utils/const";

const Footer = () => {
  return (
    <Stack
      textAlign="center"
      py={3}
      bgcolor={bgDarkCard}
      color="#fff"
      borderRadius={1}
    >
      <Typography variant="body2">
        &copy; 2024 Yordan SB. Todos los derechos reservados.
      </Typography>
    </Stack>
  );
};
export default Footer;
