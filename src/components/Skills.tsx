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
import vite from "../../public/vite.svg";
import ts from "../assets/icons/ts.svg";
import mongo from "../assets/icons/mongodb.svg";
import mui from "../assets/icons/material-ui.svg";
import angular from "../assets/icons/angular.svg";

const Skills = () => {
  return (
    <Stack id="skills" mb={4} width={"auto"}>
      <Typography variant="h4" component="h2" gutterBottom>
        Habilidades
      </Typography>
      <Stack
        spacing={3}
        width={"auto"}
        direction={"row"}
        justifyContent={"center"}
      >
        <CardTransparent title="Frontend">
          <Stack
            spacing={3}
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
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
          <img src={vsc} alt="vsc" />
          <img src={git} alt="git" />
          <img src={github} alt="github" />
          <img src={mongo} alt="MongoDB" />
        </CardTransparent>
      </Stack>
    </Stack>
  );
};

export default Skills;
