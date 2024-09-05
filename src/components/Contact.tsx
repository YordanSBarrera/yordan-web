import { Box, Container, Typography } from "@mui/material";
import ContactIcons from "./ContactIcons";

const Contact = () => {
  return (
    <Box id="contact" sx={{ mb: 4 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1">
          Puedes contactarme a través de las siguientes plataformas:
        </Typography>
        <ContactIcons />
      </Container>
    </Box>
  );
};
export default Contact;
