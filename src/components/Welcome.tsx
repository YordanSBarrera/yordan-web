import { bgTransparenCard } from "../utils/const";
import NameAnimation from "./NameAnimation";
import FigureAnimation from "./FigureAnimation";
import { Stack, Typography, Box, styled, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const AnimatedGrid = styled(Grid)`
  animation: slideIn 0.8s ease-out forwards;
  opacity: 0;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const AnimatedDescription = styled(Typography)`
  opacity: 0;
  animation: fadeUp 0.8s ease-out forwards 0.5s;
  
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Welcome = () => {
  const { t } = useTranslation();
  
  return (
    <Grid container spacing={3}>
      <AnimatedGrid 
        item
        xs={12} 
        md={6} 
        xl={7}
        sx={{
          textAlign: "center",
          color: "#fff",
          borderRadius: 2,
          backgroundColor: bgTransparenCard,
          p: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <Stack spacing={2} width="100%">
          <NameAnimation />
          <AnimatedDescription
            variant="body1"
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              lineHeight: 1.6,
              maxWidth: "800px",
              margin: "0 auto",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            {t("descriptionResume")}
          </AnimatedDescription>
        </Stack>
      </AnimatedGrid>
      <Grid item xs={12} md={6} xl={5}>
        <Box
          sx={{
            transform: { xs: "scale(0.9)", sm: "scale(1)" },
            transition: "transform 0.3s ease",
            width: "100%",
          }}
        >
          <FigureAnimation />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Welcome;
