import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: 1,
      }}
    >
      <Typography variant="body2">
        &copy; 2024 Yordan SB. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};
export default Footer;
