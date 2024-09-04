import "./styles/App.css";
import { Container, Stack } from "@mui/material";
import backgroung from "./assets/img/bg-space.png";
import Body from "./Body";
import MyBar from "./modules/menu-nav/MyBar";
import Footer from "./modules/footer/Footer";

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
        Height: "100vh",
        color: "white",
      }}
    >
      <Container>
        <MyBar />
        <Body stackProps={{ mt: 10 }} />
        <Footer />
      </Container>
    </Stack>
  );
}

export default App;
