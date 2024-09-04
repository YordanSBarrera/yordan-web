import { Container, Stack } from "@mui/material";
import Footer from "../modules/footer/Footer";
import AboutMe from "../modules/aboutMe/AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";
import MyBar from "../modules/menu-nav/MyBar";
import backgroung from "../assets/img/bg-space.png";

const MyInformation = () => {
  return (
    <Stack
      sx={{
        mt: 0,
        width: "100vw",
        backgroundImage: `url(${backgroung})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        border: "1px yellow solid",
        Height: "100vh",
        color: "white",
      }}
    >
      <Container>
        <MyBar />
        <Header stackProps={{ mt: 13, id: "home" }} />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </Stack>
  );
};

export default MyInformation;
