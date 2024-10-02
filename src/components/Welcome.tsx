import { bgTransparenCard } from "../utils/const";
import NameAnimation from "./NameAnimation";
import FigureAnimation from "./FigureAnimation";
import Grid from "@mui/material/Grid2";
import { Stack, Typography } from "@mui/material";
import AboutMe from "../modules/aboutMe/AboutMe";

const Welcome = () => {
  return (
    <Grid container spacing={2} sx={{ id: "home" }} size={12}>
      <Grid
        size={{ xs: 12, md: 6, xl: 7 }}
        textAlign="center"
        color="#fff"
        borderRadius={2}
        sx={{ backgroundColor: bgTransparenCard }}
      >
        <Stack>
          <NameAnimation />
          <Typography variant="body1">
            Soy un desarrollador frontend con experiencia en HTML, CSS,
            JavaScript, Typescript y frameworks como React. Me apasiona crear
            experiencias de usuario atractivas y funcionales.
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6, xl: 5 }}>
        <FigureAnimation />
      </Grid>
    </Grid>
  );
};

export default Welcome;
