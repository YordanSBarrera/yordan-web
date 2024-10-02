import TrackVisibility from "react-on-screen";
import AstronautFigure from "../assets/img/header-img.svg";
import "animate.css";

const FigureAnimation = () => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
          <img src={AstronautFigure} alt="Header Img" />
        </div>
      )}
    </TrackVisibility>
  );
};

export default FigureAnimation;
