import { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
import "animate.css";

const AnimatedTypography = styled(Typography)`
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  
  @keyframes fadeIn {
    from { 
      opacity: 0;
      transform: translateY(-20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TypewriterText = styled(Typography)`
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 4px;
    background: linear-gradient(180deg, #2196F3 0%, #21CBF3 100%);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(33, 150, 243, 0.4);
    animation: blink 0.8s step-end infinite, glow 2s ease-in-out infinite;
  }

  @keyframes blink {
    from, to { opacity: 1 }
    50% { opacity: 0.3 }
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 8px rgba(33, 150, 243, 0.4); }
    50% { box-shadow: 0 0 12px rgba(33, 150, 243, 0.6); }
  }
`;

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
  const period = 3000; // Increased pause time at the end of each word

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
      setDelta((prevDelta) => prevDelta / 1.2); // Slower deletion
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period / 3); // Slower initial deletion
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(350); // Slower initial typing
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <AnimatedTypography
        variant="h2"
        sx={{
          fontSize: { xs: "40px", sm: "55px", md: "65px" },
          fontWeight: 700,
          lineHeight: 1.2,
          mb: 2,
          background: "linear-gradient(45deg, #10b981 30%, #06b6d4 90%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        Hola soy Yordan Saldaña
      </AnimatedTypography>
      <TypewriterText
        variant="h3"
        className="txt-rotate"
        data-rotate={toRotate}
        sx={{
          fontSize: { xs: "30px", sm: "45px", md: "55px" },
          fontWeight: 500,
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          minWidth: "10px", // Ensure cursor is visible when text is empty
        }}
      >
        {text}
      </TypewriterText>
    </Box>
  );
};

export default NameAnimation;
