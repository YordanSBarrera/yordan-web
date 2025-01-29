import { bgTransparenCard } from "../utils/const";
import NameAnimation from "./NameAnimation";
import FigureAnimation from "./FigureAnimation";
import Grid from "@mui/material/Grid2";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2} size={12}>
      <Grid
        size={{ xs: 12, md: 6, xl: 7 }}
        textAlign="center"
        color="#fff"
        borderRadius={2}
        sx={{ backgroundColor: bgTransparenCard }}
      >
        <Stack>
          <NameAnimation />
          <Typography variant="body1">{t("descriptionResume")}</Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6, xl: 5 }}>
        <FigureAnimation />
      </Grid>
    </Grid>
  );
};

export default Welcome;
