import { Stack, StackProps } from "@mui/material";
import AboutMe from "./modules/aboutMe/AboutMe";
import Skills from "./components/Skills";
import Projects from "./modules/Project/Projects";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";

type BodyProp = { stackProps?: StackProps };
const Body = ({ stackProps }: BodyProp) => {
  return (
    <Stack {...stackProps}>
      <Welcome />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </Stack>
  );
};

export default Body;
