import { Route, Routes } from "react-router-dom";
import AboutMe from "./modules/aboutMe/AboutMe";
import Body from "./Body";
import Projects from "./modules/Project/Projects";
import App from "./App";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export const rootRoute = "/yordan-web/";
export const homeRoute = rootRoute + "home";
export const projectRoute = rootRoute + "project";
export const aboutRoute = rootRoute + "about";
export const skillRoute = rootRoute + "skill";
export const contactRoute = rootRoute + "contact";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path={rootRoute} element={<App />} />
      <Route path={homeRoute} element={<Body stackProps={{ mt: 10 }} />} />
      <Route path={projectRoute} element={<Projects />} />
      <Route path={aboutRoute} element={<AboutMe />} />
      <Route path={skillRoute} element={<Skills />} />
      <Route path={contactRoute} element={<Contact />} />
    </Routes>
  );
};
export default MyRoutes;
