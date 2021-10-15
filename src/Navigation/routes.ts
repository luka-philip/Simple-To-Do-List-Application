import { lazy } from "react";
import { RouteProps } from "react-router";
import { ROUTES } from "../Navigation/constants";

const HomePage = lazy(() => import("../Homepage/Homepage"));
const AboutPage = lazy(() => import("../AboutPage/AboutPage"));

export interface SRouteProps extends RouteProps {
  label?: string;
}

export const homeRoutes: SRouteProps = {
  path: ROUTES.HOME_PAGE,
  component: HomePage,
  label: "Home",
};

export const aboutRoutes: SRouteProps = {
  path: ROUTES.ABOUT_PAGE,
  component: AboutPage,
  label: "About",
};

export const routes: SRouteProps[] = [homeRoutes, aboutRoutes];
