import { useState, useEffect } from "react";
import "animate.css";
import { Box, Typography } from "@mui/material";

const NameAnimation = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [_index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Box>
      <Typography
        variant="h2"
        component="h1"
        style={{
          // fontsize=: 65px;
          // font-weight: 700;
          // letter-spacing: 0.8px;
          // line-height: 1;
          // margin-bottom: 20px;
          // display: block;
          fontSize: "65px",
          fontWeight: 700,
          lineHeight: 1,
          display: "block",
        }}
      >
        Hola soy Yordan Saldaña
      </Typography>
      <br />
      <Typography
        variant="h3"
        component="span"
        className="txt-rotate"
        data-rotate={toRotate}
        style={{
          textWrap: "wrap",
          fontSize: "55px",
          fontWeight: 500,
        }}
      >
        {` ${text}`}
      </Typography>
    </Box>
  );
};

export default NameAnimation;
