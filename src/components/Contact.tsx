import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ContactIcons from "./ContactIcons";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const cv = "/yordan-web/docs/Yordan_CV_2024_ES_.pdf";

  return (
    <Box>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          {t("contact")}
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
            {t("downloadCV")}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
export default Contact;
