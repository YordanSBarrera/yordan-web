import { Box, Button, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { bgTransparenCard } from "../../utils/const";
import { t } from "i18next";

const CustomButton = styled(Button)(({}) => ({
  backgroundColor: "gray",
  color: "white",

  "&:hover": {
    backgroundColor: "gray",
  },
}));

type ProjectGridCardProps = {
  cardName: string;
  imgSrc: string;
  imgAlt: string;
  projectDescription: string;
  buttonAction?: () => void;
};

const ProjectGridCard = ({
  cardName,
  imgSrc,
  imgAlt,
  projectDescription,
  buttonAction,
}: ProjectGridCardProps) => {
  const isButtonActive = buttonAction ? true : false;
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Box sx={{ backgroundColor: bgTransparenCard }} p={2} borderRadius={1}>
        <Typography variant="h5" component="h3" mb={2}>
          {cardName}
        </Typography>
        <img
          src={imgSrc}
          alt={imgAlt}
          width="100%"
          height="100%"
          loading="lazy"
        />
        <Typography variant="body1" mb={2}>
          {projectDescription}
        </Typography>
        {isButtonActive ? (
          <Button
            variant={"contained"}
            color="primary"
            onClick={isButtonActive ? buttonAction : () => {}}
          >
            {t("viewMore")}
          </Button>
        ) : (
          <CustomButton disabled>{t("viewMore")}</CustomButton>
        )}
      </Box>
    </Grid>
  );
};

export default ProjectGridCard;
