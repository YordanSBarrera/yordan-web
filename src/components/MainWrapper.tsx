import { Container, Stack } from "@mui/material";
import { ReactNode } from "react";
import MyBar from "../modules/menu-nav/MyBar";
import Footer from "../modules/footer/Footer";
import backgroung from "../assets/img/bg-space.png";
// "./assets/img/bg-space.png";

type MainWrapperProps = {
  children: ReactNode;
};

const MainWrapper = ({ children }: MainWrapperProps) => {
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
        <Stack alignSelf="flex-start">
          <MyBar />
        </Stack>
        <Stack width="100vh" justifyContent="center">
          {children}
        </Stack>
        <Stack alignSelf="end">
          <Footer />
        </Stack>
      </Container>
    </Stack>
  );
};

export default MainWrapper;
