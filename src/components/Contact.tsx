import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ContactIcons from "./ContactIcons";

const Contact = () => {
  const cv = "/yordan-web/docs/Yordan_CV_2024_ES_.pdf";

  return (
    <Box
      id="contact"
      //  sx={{ mb: 4 }}
    >
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Contacto
        </Typography>

        <Typography variant="body1">
          Puedes contactarme a través de las siguientes plataformas:
        </Typography>
        <ContactIcons />
        <Stack alignItems={"center"} mt={2}>
          <Button
            variant="contained"
            color="primary"
            href={cv}
            download
            sx={{ width: "200px" }}
          >
            Descargar CV
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
export default Contact;
