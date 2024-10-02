import { bgTransparenCard } from "../utils/const";
import NameAnimation from "./NameAnimation";
import FigureAnimation from "./FigureAnimation";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import AboutMe from "../modules/aboutMe/AboutMe";

const Welcome = () => {
  return (
    <Grid container spacing={2} sx={{ id: "home" }} size={12}>
      <Grid
        size={{ xs: 6, md: 8 }}
        textAlign="center"
        color="#fff"
        borderRadius={2}
        sx={{ backgroundColor: bgTransparenCard }}
      >
        <Stack>
          <NameAnimation />
          <AboutMe />
        </Stack>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <FigureAnimation />
      </Grid>
    </Grid>
  );
};

export default Welcome;
