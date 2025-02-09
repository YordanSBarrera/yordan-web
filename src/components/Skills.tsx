import { Stack, Typography } from "@mui/material";
import CardTransparent from "./CardTransparent";

import git from "../assets/icons/1/git.svg";
import github from "../assets/icons/1/github.svg";
import bootstrap from "../assets/icons/1/bootstrap-oreja.svg";
import css from "../assets/icons/1/css.svg";
import html5 from "../assets/icons/1/html5.svg";
import js from "../assets/icons/1/javascript.svg";
import react from "../assets/icons/1/reaccionar.svg";
import vsc from "../assets/icons/1/vsc2019.svg";
import vite from "../assets/icons/1/vite.svg";
import ts from "../assets/icons/1/ts.svg";
import mongo from "../assets/icons/1/mongodb.svg";
import mui from "../assets/icons/1/material-ui.svg";
import angular from "../assets/icons/1/angular.svg";
import emailW from "../assets/icons/1/email-white.svg";
import githubW from "../assets/icons/1/github-white.svg";
import linkedinW from "../assets/icons/1/linkedin-white.svg";
import { useTranslation } from "react-i18next";

import gitNew from "../assets/icons/git.svg";
import gitHubDark from "../assets/icons/Github_dark.svg";
import gitHubLigth from "../assets/icons/Github_light.svg";
import mongoDb from "../assets/icons/mongodb.svg";
import npm from "../assets/icons/npm.svg";
import yarn from "../assets/icons/yarn.svg";
import pnpmDark from "../assets/icons/Pnpm_dark.svg";
import pnpmLigth from "../assets/icons/Pnpm_light.svg";
import next from "../assets/icons/nextjs_icon_dark.svg";
import postman from "../assets/icons/postman.svg";
import javascript from "../assets/icons/javascript.svg";
import json from "../assets/icons/json-schema.svg";
import reactQuery from "../assets/icons/reactquery.svg";
import reactRouter from "../assets/icons/reactrouter.svg";
import materialUI from "../assets/icons/materialui.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Stack width={"auto"} spacing={3} alignItems="center" alignContent="center">
      <Typography variant="h4" component="h2" gutterBottom>
        {t("skills")}
      </Typography>
      <Stack
        spacing={5}
        width="100%"
        justifyContent="center"
        display="flex"
        flexWrap="wrap"
      >
        <CardTransparent title="Front-end">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            spacing={3}
          >
            <img src={html5} alt="html5" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={ts} alt="typescript" />
            <img src={react} alt="react" />
            <img
              src={materialUI}
              alt="material UI"
              height="40px"
              width="40px"
            />
            <img src={bootstrap} alt="bootstrap" />
            <img src={vite} alt="Vite" height="40px" />
            <img src={angular} alt="Angular" height="43px" />
            <img src={next} alt="Next" height="40px" />
          </Stack>
        </CardTransparent>
        <CardTransparent title={t("others")}>
          <Stack
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <img src={vsc} alt="vsc" />
            <img src={github} alt="github" />
            {/* NUEVOS ICONS */}
            <img src={gitNew} alt="gitNew" height="40px" width="40px" />
            <img src={mongoDb} alt="mongoDb" height="40px" />
            <img src={postman} alt="postman" height="40px" width="40px" />
            <img src={npm} alt="npm" height="40px" width="40px" />
            <img src={yarn} alt="yarn" height="40px" width="40px" />
            <img src={pnpmLigth} alt="pnpmLigth" height="35px" width="35px" />
            <img src={json} alt="git" height="40px" width="40px" />
            <img src={reactQuery} alt="git" height="40px" width="40px" />
            <img src={reactRouter} alt="git" height="40px" width="40px" />
            <img src={linkedin} alt="linkedin" height="35px" width="35px" />
          </Stack>
        </CardTransparent>
      </Stack>
    </Stack>
  );
};

export default Skills;
