import { Stack, StackProps, Typography } from "@mui/material";
import AboutMe from "./modules/aboutMe/AboutMe";
import Skills from "./components/Skills";
import Projects from "./modules/Project/Projects";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";

type BodyProp = { stackProps?: StackProps };

const Body = ({ stackProps }: BodyProp) => {
  return (
    <Stack {...stackProps} spacing={3} justifyContent="center">
      <Typography variant="h4" component="h2" color="warning" m={1}>
        Sitio web en Desarrollo...
      </Typography>
      <Welcome />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </Stack>
  );
};

export default Body;
