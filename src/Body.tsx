import { Button, Stack, StackProps } from "@mui/material";
import AboutMe from "./modules/aboutMe/AboutMe";
import Skills from "./components/Skills";
import Projects from "./modules/Project/Projects";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";

type BodyProp = { stackProps?: StackProps };

const Body = ({ stackProps }: BodyProp) => {
  const cv = "/yordan-web/docs/Yordan_CV_2024_ES_.pdf";

  return (
    <Stack {...stackProps}>
      <Welcome />
      <AboutMe />
      <Skills />
      <Projects />
      <Stack alignItems={"center"} spacing={3}>
        <Button
          variant="contained"
          color="primary"
          href={cv}
          download
          sx={{ width: "200px" }}
        >
          Descargar CV
        </Button>
      </Stack>
      <Contact />
    </Stack>
  );
};

export default Body;
