import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import ProjectGridCard from "./ProjectGridCard";
import medisproutImg from "../../assets/img/calendarMedisprout.webp";
import ecomerceImg from "../../assets/img/project-eCommerce500x320.webp";
import usersList from "../../assets/img/usersList.webp";
import dashboard from "../../assets/img/dashboard.webp";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        {t("projects")}
      </Typography>
      <Grid container spacing={2}>
        <ProjectGridCard
          cardName={t("medisprout")}
          imgSrc={medisproutImg}
          imgAlt={t("medisproutAppImg")}
          projectDescription={t("medisproutDetail")}
        />
        <ProjectGridCard
          cardName={t("ecomerce")}
          imgSrc={ecomerceImg}
          imgAlt={t("ecomerce")}
          projectDescription={t("coreanHouseDetail")}
        />
        <ProjectGridCard
          cardName={t("usersList")}
          imgSrc={usersList}
          imgAlt={t("usersList")}
          projectDescription={t("usersListDetails")}
        />
        <ProjectGridCard
          cardName={t("dashboard")}
          imgSrc={dashboard}
          imgAlt={t("dashboardAppImg")}
          projectDescription={t("dashboardDetail")}
        />
      </Grid>
    </Box>
  );
};
export default Projects;
