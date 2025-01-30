import { Container, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import MyBar from "../modules/menu-nav/MyBar";
import Footer from "../modules/footer/Footer";
import backgroung from "../assets/img/bg-space.png";
import { useTranslation } from "react-i18next";

type MainWrapperProps = {
  children: ReactNode;
};

const MainWrapper = ({ children }: MainWrapperProps) => {
  const { t } = useTranslation();

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
        minHeight: "100vh",
      }}
    >
      <Container>
        <Stack alignSelf="flex-start">
          <MyBar />
        </Stack>
        <Stack width="100%" justifyContent="center" mt="90px" mb="60px">
          <Typography variant="h4" component="h2" color="warning">
            {t("webSiteInDeveloment")}
          </Typography>
          {children}
        </Stack>
        <Stack position="fixed" width="100%" bottom={0}>
          <Footer />
        </Stack>
      </Container>
    </Stack>
  );
};

export default MainWrapper;
