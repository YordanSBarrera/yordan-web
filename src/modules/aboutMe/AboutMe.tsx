import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box id="about" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Sobre Mí
      </Typography>
      <Typography variant="body1">
        Soy un desarrollador frontend con experiencia en HTML, CSS, JavaScript y
        frameworks como React. Me apasiona crear experiencias de usuario
        atractivas y funcionales.
      </Typography>
    </Box>
  );
};

export default AboutMe;
