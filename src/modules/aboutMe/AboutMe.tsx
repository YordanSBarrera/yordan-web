import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        {t("aboutMe")}
      </Typography>
      <Typography variant="body1">{t("descriptionResume")}</Typography>
    </Box>
  );
};

export default AboutMe;
