import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ContactIcons from "./ContactIcons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Contact = () => {
  const { t } = useTranslation(["lang"]);
  const cv = "/yordan-web/docs/Yordan_CV_2024_ES_.pdf";

  return (
    <Box>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Contacto {i18next.t("key")}
        </Typography>

        <Typography variant="body1">
          {t("youCanContactMeThroughThe")}
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
