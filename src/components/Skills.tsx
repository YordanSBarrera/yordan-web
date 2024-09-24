import { Stack, Typography } from "@mui/material";
import CardTransparent from "./CardTransparent";

import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import bootstrap from "../assets/icons/bootstrap-oreja.svg";
import css from "../assets/icons/css.svg";
import html5 from "../assets/icons/html5.svg";
import js from "../assets/icons/javascript.svg";
import react from "../assets/icons/reaccionar.svg";
import vsc from "../assets/icons/vsc2019.svg";
import vite from "../assets/icons/vite.svg";
import ts from "../assets/icons/ts.svg";
import mongo from "../assets/icons/mongodb.svg";
import mui from "../assets/icons/material-ui.svg";
import angular from "../assets/icons/angular.svg";
import emailW from "../assets/icons/email-white.svg";
import githubW from "../assets/icons/github-white.svg";
import linkedinW from "../assets/icons/linkedin-white.svg";

// import git from "@assets/icons/git.svg";
// import github from "@assets/icons/github.svg";
// import bootstrap from "@assets/icons/bootstrap-oreja.svg";
// import css from "@assets/icons/css.svg";
// import html5 from "@assets/icons/html5.svg";
// import js from "@assets/icons/javascript.svg";
// import react from "@assets/icons/reaccionar.svg";
// import vsc from "@assets/icons/vsc2019.svg";
// import vite from "@public/vite.svg";
// import ts from "@assets/icons/ts.svg";
// import mongo from "@assets/icons/mongodb.svg";
// import mui from "@assets/icons/material-ui.svg";
// import angular from "@assets/icons/angular.svg";
// import emailW from "@assets/icons/email-white.svg";
// import githubW from "@assets/icons/github-white.svg";
// import linkedinW from "@assets/icons/linkedin-white.svg";

const Skills = () => {
  return (
    <Stack id="skills" mb={4} width={"auto"}>
      <Typography variant="h4" component="h2" gutterBottom>
        Habilidades
      </Typography>
      <Stack
        spacing={3}
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        flexWrap="wrap"
      >
        <CardTransparent title="Frontend">
          <Stack
            spacing={3}
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap="wrap"
          >
            <img src={html5} alt="html5" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={ts} alt="typescript" />
            <img src={react} alt="react" />{" "}
            <img src={mui} alt="Material UI" height={"38px"} />
            <img src={bootstrap} alt="bootstrap" />
            <img src={vite} alt="vite" height={"40px"} />
            <img src={angular} alt="Angular" height={"43px"} />
          </Stack>
        </CardTransparent>
        <CardTransparent title="Otras">
          <Stack
            spacing={3}
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap="wrap"
          >
            <img src={vsc} alt="vsc" />
            <img src={git} alt="git" />
            <img src={github} alt="github" />
            <img src={mongo} alt="MongoDB" />
            <img src={emailW} alt="js" height={"35px"} />
            <img src={linkedinW} alt="js" height={"30px"} />
            <img src={githubW} alt="js" height={"55px"} />
          </Stack>
        </CardTransparent>
      </Stack>
    </Stack>
  );
};

export default Skills;
