import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      textAlign="center"
      py={3}
      bgcolor="#333"
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
