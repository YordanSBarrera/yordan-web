import TrackVisibility from "react-on-screen";
import AstronautFigure from "../assets/img/header-img.svg";
import "animate.css";
import { Box, Stack } from "@mui/material";

const FigureAnimation = () => {
  return (
    <Stack className="figure">
      <TrackVisibility>
        {({ isVisible }) => (
          <Box
            className={
              isVisible ? "animate__animated animate__zoomInRight" : ""
            }
          >
            <img src={AstronautFigure} alt="Header Img" width={"600px"} />
          </Box>
        )}
      </TrackVisibility>
    </Stack>
  );
};

export default FigureAnimation;
