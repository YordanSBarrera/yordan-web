import { Route, Routes } from "react-router-dom";
import AboutMe from "./modules/aboutMe/AboutMe";
import Body from "./Body";
import Projects from "./modules/Project/Projects";
import App from "./App";

const MyRoutes = () => {
  const rootRoute = "/yordan-web/";

  return (
    <Routes>
      <Route path={rootRoute} element={<App />} />
      <Route path={rootRoute + "project"} element={<Projects />} />
      <Route
        path="/yordan-web/Home"
        element={<Body stackProps={{ mt: 10 }} />}
      />

      <Route path={rootRoute + "about"} element={<AboutMe />} />
    </Routes>
  );
};
export default MyRoutes;
