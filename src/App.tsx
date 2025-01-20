import "./styles/App.css";
import { Container, Stack } from "@mui/material";
import backgroung from "./assets/img/bg-space.png";
import Body from "./Body";
import MyBar from "./modules/menu-nav/MyBar";
import Footer from "./modules/footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./modules/aboutMe/AboutMe";

function App() {
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
        color: "white",
      }}
    >
      <Container>
        <MyBar />
        <Routes>
          <Route path="/yordan-web/" element={<App />} />
          <Route path="/" element={<Body stackProps={{ mt: 10 }} />} />
          <Route path="/yordan-web/about" element={<AboutMe />} />
        </Routes>
        <Footer />
      </Container>
    </Stack>
  );
}

export default App;
