import { Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const MyInformation = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
};

export default MyInformation;
