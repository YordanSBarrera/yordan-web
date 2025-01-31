import TrackVisibility from "react-on-screen";
import AstronautFigure from "../assets/img/header-img.svg";
import "animate.css";
import { Box, Stack } from "@mui/material";

const FigureAnimation = () => {
  return (
    <Stack className="figure" width="100%">
      <TrackVisibility>
        {({ isVisible }) => (
          <Box
            className={
              isVisible ? "animate__animated animate__zoomInRight" : ""
            }
            sx={{
              width: { xs: "100%", sm: "80%", md: "100%", lg: "600px" },
              margin: "0 auto",
              padding: { xs: "10px", sm: "20px", md: "30px" },
            }}
          >
            <img src={AstronautFigure} alt="Header Img" width="100%" />
          </Box>
        )}
      </TrackVisibility>
    </Stack>
  );
};

export default FigureAnimation;
